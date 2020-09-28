import React from 'react';

class TableAwal extends React.Component {
    constructor(props) {
        super(props);
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
                    
                </tbody>
            </table>

            <div style={styles.container}>
            ID: <input type="text" name="id"></input>
            <span>&nbsp;</span> <span>&nbsp;</span>
            PROVINSI: <input type="text" name="instansi"></input>
            <span>&nbsp;</span>
            <button>TAMBAH</button>
            </div>

            <div style={styles.container}>
            Baru Saja ditambahkan:
            <br></br>ID: <span></span>
            <br></br>PROVINSI: <span></span>
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

export default TableAwal;