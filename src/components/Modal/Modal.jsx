import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Chart from 'react-google-charts';
import './Modal.scss'

class CustomModal extends React.Component {
    render() {
        let rows = [<span />];
        let publications = [['Year', 'No. of publications']];
        if (this.props.geneData.length > 0) {
            publications = publications.concat(this.props.geneData[0].publications)
        }
        rows = this.props.geneData.map((gene) => (
            <>
                <tr>
                    <th>Gene ID</th>
                    <th>{gene.id}</th>
                </tr>
                <tr>
                    <th>Short Name</th>
                    <th>{gene.short_name}</th>
                </tr>
                <tr>
                    <th>Family</th>
                    <th>{gene.family}</th>
                </tr>
                <tr>
                    <th>Number of Structures</th>
                    <th>{gene.num_structures}</th>
                </tr>
                <tr>
                    <th>Number of Compounds</th>
                    <th>{gene.num_compounds}</th>
                </tr>
                <tr>
                    <th>Druggable</th>
                    <th>{gene.features.is_druggable ? 'Yes' : 'No'}</th>
                </tr>
                <tr>
                    <th>Enzyme</th>
                    <th>{gene.features.is_enzyme ? 'Yes' : 'No'}</th>
                </tr>
                <tr>
                    <th>Description</th>
                    <th>{gene.description}</th>
                </tr>
                <tr>
                    <th colSpan={2}>
                        <Chart
                            width={'100%'}
                            height={'50vh'}
                            chartType="BarChart"
                            loader={<div>Loading Chart</div>}
                            data={publications}
                            options={{
                                title: 'Publications',
                                chartArea: { width: '50%' },
                                hAxis: {
                                    title: 'No. of publications',
                                    minValue: 0,
                                },
                                vAxis: {
                                    title: 'Year',
                                },
                            }}
                            // For tests
                            rootProps={{ 'data-testid': '1' }}
                        />
                    </th>
                </tr>
            </>
        ))
        return (
            <div className='custom-modal'>
                <Modal
                    show={this.props.geneData.length > 0}
                    onHide={() => { this.props.setSelectedGeneData('') }}
                    size={'xl'}
                >
                    {
                        this.props.geneData.length > 0 ? (<>
                            <Modal.Header closeButton>
                                <Modal.Title id="detail-title">
                                    <img src={this.props.geneData[0].image} alt="gene img" />
                                    {this.props.geneData[0].full_name}
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Table striped={true} bordered={true} hover={true} size={"sm"} >
                                    <tbody>
                                        {rows}
                                    </tbody>
                                </Table>

                            </Modal.Body>
                        </>
                        )
                            :
                            <span />
                    }

                </Modal>
            </div>
        );
    }
}

export default CustomModal;
