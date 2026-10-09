import { useEffect, useState } from 'react'
import api from '~/axios'

export default function Index() {

    const [users, setUsers] = useState([])

    const fetchData = async () => {
        try {
            const response = await api.get(`/api/dashboard/user`);
            setUsers(response.data.users)
            console.log('fetchdata user', response.data.users)
        } catch (error) {
            console.log(error)
        }
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
                                            {console.log('user state i ', users)}
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
                                                                    <button type="button" className="btn btn-info btn-sm mr-3">
                                                                        <i className="fas fa-edit mr-1" /> Edit</button>
                                                                    <button type="button" className="btn btn-danger btn-sm">
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
                    </div>
                    {/* <!-- /.container-fluid --> */}
                </section >
                {/* <!-- /.content --> */}
            </div >
            {/* <!-- /.content-wrapper --> */}
        </>
    )
}