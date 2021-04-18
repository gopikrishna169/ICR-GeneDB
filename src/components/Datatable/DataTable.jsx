import React from 'react';
import Table from 'react-bootstrap/Table';
import './DataTable.scss';
class Datatable extends React.Component {
    constructor(props) {
        super(props);
        this.selectedGene = this.selectedGene.bind(this)
    }

    selectedGene(id) {
        this.props.setSelectedGeneData(id);
    }
    render() {
        let rows = [<span />];
        rows = this.props.geneData.map((gene, idx) => (
            <tr key={idx} onClick={()=> {this.selectedGene(gene.id)}}>
                <th><div>{gene.short_name}</div></th>
                <th><img src={gene.image} alt={'Gene'} className={'geneImg'}/></th>
                <th>
                    <p>Druggable: {gene.features.is_druggable ? 'Yes' : 'No'}</p>
                    <p>Enzyme: {gene.features.is_enzyme ? 'Yes' : 'No'}</p>
                </th>
            </tr>)
        )
        return (
            <Table striped={true} bordered={true} hover={true} size={"sm"} >
                <tbody>
                    {rows}
                </tbody>
            </Table>
        );
    }
}

export default Datatable;
