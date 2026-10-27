import { useEffect, useState } from 'react'
import Alert from '~/admin/components/Alert'
import api from '~/axios'

export default function Index() {

    //formdan gelen tüm verileri saklıyor
    const [formData, setFormData] = useState({ name: '', roles: [] })
    const [errors, setErrors] = useState({})
    const [users, setUsers] = useState([])
    const [roles, setRoles] = useState([])
    //kullanıcı nesnesi, apiden gelen tüm user nesnesini tutuyor.
    const [user, setUser] = useState({})
    //işarerli ollerin idlerini tutuyor
    const [selectedRoleId, setSelectedRoleId] = useState([])
    // const [userId, setUserId] = useState()


    const fetchData = async () => {
        try {
            const response = await api.get(`/api/dashboard/user`);
            setUsers(response.data.users)
            setRoles(response.data.roles)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchUser = async (id) => {
        try {
            const response = await api.get(`/api/dashboard/user/` + id);
            setUser(response.data.user)
            setSelectedRoleId(response.data.user.roles.map(role => role.id))
            setFormData({
                name: response.data.user.name,
                roles: response.data.user.roles.map(role => role.id)
            })
            setErrors({})

        } catch (error) {
            console.log(error)
        }
    }

    const updateUser = async (id) => {
        try {
            const confirmed = await Alert({
                type: 'confirm',
                title: 'Are you sure?',
                text: 'Are you sure you want to update this user?',
                confirmButtonText: 'Yes, update it.',
                showCancelButton: true,
                cancelButtonText: 'Cancel'
            })

            if (!confirmed) return

            const response = await api.put(`/api/dashboard/user/` + id,
                {
                    name: formData.name,
                    roles: selectedRoleId
                });

            Alert({
                title: 'Success',
                icon: 'success',
                text: response.data.message

            })
            console.log('update data:', response.data)

            setUsers(prev =>
                prev.map((item) =>
                    item.id === Number(id)
                        ? {
                            ...item,
                            name: response.data.user.name,
                            roles: response.data.user.roles
                        }
                        : item
                )
            )

        } catch (error) {
            if (error.response && error.response.status === 422) {
                setErrors(error.response?.data?.errors)
            }
            if (error.response && error.response.status === 500) {
                Alert({
                    title: 'Error',
                    text: error.response?.data?.message,
                    icon: 'error'
                })
            }
            if (error.response && error.response.status === 404) {
                Alert({
                    title: 'Error',
                    text: error.response?.data?.message,
                    icon: 'error'
                })
            }

        }
    }

    const deleteUser = async (id) => {
        try {
            const confirmed = await Alert({
                type: 'confirm',
                title: 'Are you sure?',
                text: 'Are you sure you want to delete this user?',
                confirmButtonText: 'Yes, delete it.',
                showCancelButton: true,
                cancelButtonText: 'Cancel'
            })

            if (!confirmed) return

            const response = await api.delete(`/api/dashboard/user/` + id)

            Alert({
                title: 'Success',
                icon: 'success',
                text: response.data.message

            })

            setUsers(prev =>
                prev.filter(item => item.id !== Number(id)
                )
            )
        } catch (error) {
            if (error.response && error.response.status === 500) {
                Alert({
                    title: 'Error',
                    text: error.response?.data?.message,
                    icon: 'error'
                })
            }
            if (error.response && error.response.status === 404) {
                Alert({
                    title: 'Error',
                    text: error.response?.data?.message,
                    icon: 'error'
                })
            }


        }
    }

    const handleForm = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleCheck = (e) => {
        const roleId = parseInt(e.target.value)

        e.target.checked
            ? setSelectedRoleId(prev => [...prev, roleId])
            : setSelectedRoleId(prev => prev.filter(p => p !== roleId))

    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <>
            {/* <!-- Content Wrapper. Contains page content --> */}
            <div className="content-wrapper">
                {/* <!-- Content Header (Page header) --> */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Users</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">DataTables</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /.container-fluid --> */}
                </section>

                {/* <!-- Main content --> */}
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    {/* <div className="card-header">
                                        <h3 className="card-title">DataTable with minimal features & hover style</h3>
                                    </div> */}
                                    {/* <!-- /.card-header --> */}
                                    <div className="card-body">
                                        <table id="example2" className="table table-bordered table-hover">
                                            {users?.length > 0 ? (
                                                <>
                                                    <thead>
                                                        <tr>
                                                            <th>Id</th>
                                                            <th>Name</th>
                                                            <th>Role</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {users?.map((user, index) => (
                                                            <tr key={user.id}>
                                                                <td>{index + 1}</td>
                                                                <td>{user.name}</td>
                                                                <td>{user.roles?.map(role => role.name).join(', ')}</td>
                                                                <td>
                                                                    {/* setUserId(user.id); */}
                                                                    <button type="button" className="btn btn-info btn-sm mr-3" data-toggle="modal" data-target="#userModal" onClick={() => { fetchUser(user.id) }}>
                                                                        <i className="fas fa-edit mr-1" /> Edit</button>
                                                                    <button type="button" className="btn btn-danger btn-sm" onClick={() => { deleteUser(user.id) }}>
                                                                        <i className="fas fa-trash mr-1"></i> Delete
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </>
                                            )
                                                :
                                                <tbody>
                                                    <tr>
                                                        <td>User Not Found</td>
                                                    </tr>
                                                </tbody>
                                            }

                                        </table>
                                    </div>
                                    {/* <!-- /.card-body --> */}
                                </div>
                                {/* <!-- /.card --> */}


                            </div>
                            {/* <!-- /.col --> */}
                        </div>
                        {/* <!-- /.row --> */}
                        {/* <!-- /Modalbegin --> */}
                        {console.log('modal user role:', formData.roles)}
                        <div className="modal fade" id="userModal" tabIndex="-1" aria-labelledby="userModalLabel" aria-hidden="true" style={{ paddingRight: '15px' }}>
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form onChange={handleForm} onSubmit={(e) => { e.preventDefault(); }}>
                                            <div className="form-group">
                                                <label htmlFor="name">Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    name="name"
                                                    placeholder="Enter name"
                                                    value={formData.name}
                                                />
                                                <p className="text-danger">
                                                    {errors.name}
                                                </p>
                                            </div>
                                            <div className="form-group">
                                                <label>Roles</label>
                                                {roles?.map((role) => (
                                                    <div className="custom-control custom-checkbox" key={role.id}>
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id={role.name}
                                                            name="roles"
                                                            value={role.id}
                                                            onChange={handleCheck}
                                                            checked={selectedRoleId.some(selectedRole => selectedRole === role.id)}
                                                        />
                                                        <label className="custom-control-label" htmlFor={role.name}>
                                                            {role.name.charAt(0).toUpperCase() + role.name.slice(1)}
                                                        </label>
                                                        <p className="text-danger">
                                                            {errors.roles}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="modal-footer">
                                                {console.log('edit butonu için id var mı:', user)}
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary" onClick={() => updateUser(user.id)}>Update</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- /ModalEnd --> */}
                    </div>
                    {/* <!-- /.container-fluid --> */}
                </section >
                {/* <!-- /.content --> */}
            </div >
            {/* <!-- /.content-wrapper --> */}
        </>
    )
}