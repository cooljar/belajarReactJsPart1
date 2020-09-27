import React from 'react';

class TableHasil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            provinsis: [
                {
                    id: '18',
                    instansi: 'Aceh'
                }
            ],
            addedProvinsi: {id: '18', instansi: 'Aceh'},
            id: "",
            instansi: ""
        };

        // Binding method
        this.setId = this.setId.bind(this);
        this.setInstansi = this.setInstansi.bind(this);
        this.tambahData = this.tambahData.bind(this);
    }

    renderTableData() {
        return this.state.provinsis.map((provinsi, index) => {
            const { id, instansi } = provinsi //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{instansi}</td>
                </tr>
            )
        })
    }

    setId(e){
        this.setState({id: e});
    }

    setInstansi(e){
        this.setState({instansi: e});
    }

    tambahData(){
        let sts = this.state.provinsis;
        let st = {"id":this.state.id, "instansi":this.state.instansi};
        sts.push(st);
        this.setState(state => ({
            provinsis: sts
          }));
          this.setState({addedProvinsi: st});
    }

    render() {
        return <div className="body">
            <h1 id='title'>{this.props.title}</h1>
            <table id='provinsis'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>PROVINSI</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableData()}
                </tbody>
            </table>

            <div style={styles.container}>
            ID: <input type="text" onChange={e => this.setId(e.target.value)} name="id"></input>
            <span>&nbsp;</span> <span>&nbsp;</span>
            PROVINSI: <input type="text" onChange={e => this.setInstansi(e.target.value)} name="instansi"></input>
            <span>&nbsp;</span>
            <button onClick={e => this.tambahData()}>TAMBAH</button>
            </div>

            <div style={styles.container}>
            Baru Saja ditambahkan:
            <br></br>ID: <span>{this.state.addedProvinsi.id}</span>
            <br></br>INSTANSI: <span>{this.state.addedProvinsi.instansi}</span>
            </div>
        </div>;
    }
}

const styles = {
    container: {
        border: '1px solid black',
        padding: '10px',
        marginTop: '20px'
    }
};

export default TableHasil;