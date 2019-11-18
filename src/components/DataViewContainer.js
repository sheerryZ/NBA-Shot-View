import React from 'react';
import {ShotChart} from './ShotChart';
import {CountSlider} from './CountSlider'
import { Radio, Row, Col, Switch } from 'antd';
import _ from 'lodash';


export class DataViewContainer extends React.Component{
    state = {
        minCount:2,
        displayTooltip: true,
        chartType: 'hexbin',
    }

    handleMinCountChange = _.debounce((minCount) =>{
        this.setState({minCount})
    },500);

    handleChartTypeChange = (e) => {
        this.setState({ chartType: e.target.value });
    };

    handleDisplayToolTipChange = (displayTooltip) =>{
        this.setState({displayTooltip})
    };

    render(){
        const { playerId } = this.props;
        const { minCount, displayTooltip, chartType } = this.state;
        return(
        <div className="DataView">
            <ShotChart playerId={playerId} minCount = {minCount} displayTooltip ={displayTooltip} chartType={chartType}/>
            <div className="Filter">
                {chartType === 'hexbin' ? (
                    <CountSlider handleMinCountChange={this.handleMinCountChange} defaultValue={2}/>
                ) : null}
                <br/>
                <Row>
                 <Col span={9}>
                    <Radio.Group onChange={this.handleChartTypeChange} value={chartType}>
                        <Radio value="hexbin">Hexbin</Radio>
                        <Radio value="scatter">Scatter</Radio>
                    </Radio.Group>
                 </Col>
                 <Col span ={6}>
                    Tooltip: &nbsp;
                    <Switch checkedChildren="on" unCheckedChildren="off" defaultChecked onChange={this.handleDisplayToolTipChange}/>
                 </Col>
                </Row>
            </div>




        </div>
        );
    }
}