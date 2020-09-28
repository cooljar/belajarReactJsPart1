import React from 'react';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            provinsis: [
                {
                    id: '18',
                    provinsi: 'Lampung'
                }
            ],
            addedProvinsi: {id: '18', provinsi: 'Lampung'},
            newId: "",
            newProvinsi: ""
        };

        // Binding method
        this.setId = this.setId.bind(this);
        this.setProvinsi = this.setProvinsi.bind(this);
        this.tambahData = this.tambahData.bind(this);
    }

    renderTableData() {
        return this.state.provinsis.map((provinsiData, index) => {
            const { id, provinsi } = provinsiData //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{provinsi}</td>
                </tr>
            )
        })
    }

    setId(e){
        this.setState({newId: e.target.value});
    }

    setProvinsi(e){
        this.setState({newProvinsi: e.target.value});
    }

    tambahData(){
        let sts = this.state.provinsis;
        let st = {"id":this.state.newId, "provinsi":this.state.newProvinsi};
        sts.push(st);
        this.setState({provinsis: sts});
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
            ID: <input type="text" onChange={this.setId} name="id"></input>
            <span>&nbsp;</span> <span>&nbsp;</span>
            PROVINSI: <input type="text" onChange={this.setProvinsi} name="provinsi"></input>
            <span>&nbsp;</span>
            <button onClick={this.tambahData}>TAMBAH</button>
            </div>

            <div style={styles.container}>
            Baru Saja ditambahkan:
            <br></br>ID: <span>{this.state.addedProvinsi.id}</span>
            <br></br>provinsi: <span>{this.state.addedProvinsi.provinsi}</span>
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

export default Table;