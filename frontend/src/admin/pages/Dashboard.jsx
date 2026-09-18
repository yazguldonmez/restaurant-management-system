import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '~/axios'

export default function Dashboard() {

    const [user, setUser] = useState({})

    const navigate = useNavigate()

    const fetchData = async () => {
        try {
            const response = await api.get(`/api/dashboard`);
            setUser(response.data.user)
        } catch (error) {
            if (error.response.status === 401) {
                navigate('/login')
            }
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
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Dashboard</h1>
                                {/* </div><!-- /.col --> */}
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active">Dashboard v1</li>
                                    </ol>
                                    {/* </div><!-- /.container-fluid --> */}
                                </div>
                                {/* <!-- /.content-header --> */}

                                {/* <!-- Main content --> */}
                                <section className="content">
                                    <div className="container-fluid">
                                        {/* <!-- Main row --> */}
                                        <div className="row">
                                            {/* <!-- Left col --> */}
                                            <section className="col-lg-7 connectedSortable">
                                                {/* <!-- Custom tabs (Charts with tabs)--> */}
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h3 className="card-title">
                                                            {/* <i className="fas fa-chart-pie mr-1"></i> */}
                                                            {user.name}
                                                        </h3>
                                                        <div className="card-tools">
                                                            <ul className="nav nav-pills ml-auto">
                                                                <li className="nav-item">
                                                                    <a className="nav-link active" href="#revenue-chart" data-toggle="tab">Area</a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a className="nav-link" href="#sales-chart" data-toggle="tab">Donut</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        {/* </div><!-- /.card-header --> */}
                                                        <div className="card-body">
                                                            <div className="tab-content p-0">
                                                                {/* <!-- Morris chart - Sales --> */}
                                                                <div className="chart tab-pane active" id="revenue-chart"
                                                                    style={{ position: 'relative', height: 300 + 'px' }}>
                                                                    <canvas id="revenue-chart-canvas" height="300" style={{ height: 300 + 'px' }}></canvas>
                                                                </div>
                                                                <div className="chart tab-pane" id="sales-chart" style={{ position: 'relative', height: 300 + 'px' }}>
                                                                    <canvas id="sales-chart-canvas" height="300" style={{ height: 300 + 'px' }}></canvas>
                                                                </div>
                                                            </div>
                                                            {/* </div><!-- /.card-body --> */}
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- /.row (main row) --> */}
                                                {/* </div><!-- /.container-fluid --> */}
                                            </section>
                                            {/* <!-- /.content --> */}
                                        </div>
                                        {/* <!-- /.content-wrapper --> */}
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}