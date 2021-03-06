import React,{ Component,Fragment } from 'react'
import { 
    Row,
    Col,
    Collapse,
    Form,
    Input,
    Switch,
    Select,
    InputNumber,
    Divider
} from 'antd'
import { connect } from 'react-redux'
import { changeItem,changeItemArr } from '../../../store/actions/screen-actions'
import ColorPicker from '../ColorPicker'
const { Panel } = Collapse;
const { Option } = Select;
class SettingPropsForm extends Component{
    moduleNameChange = (e)=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                name:e.target.value
            }
        })
    }
    moduleStyleWidthChange = (e)=>{
        if(isNaN(e.target.value)){
            return false
        }
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                style:{
                    width:e.target.value
                }
            }
        })
    }
    moduleStyleHeightChange = (e)=>{
        if(isNaN(e.target.value)){
            return false
        }
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                style:{
                    height:e.target.value
                }
            }
        })
    }
    moduleStyleXChange = (e)=>{
        if(isNaN(e.target.value)){
            return false
        }
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                style:{
                    x:e.target.value
                }
            }
        })
    }
    moduleStyleYChange = (e)=>{
        if(isNaN(e.target.value)){
            return false
        }
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                style:{
                    y:e.target.value
                }
            }
        })
    }
    moduleOptionsGridTopChange = value=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                options:{
                    grid:{
                        top:value
                    }
                }
            }
        })
    }
    moduleOptionsGridBottomChange = value=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                options:{
                    grid:{
                        bottom:value
                    }
                }
            }
        })
    }
    moduleOptionsGridLeftChange = value=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                options:{
                    grid:{
                        left:value
                    }
                }
            }
        })
    }
    moduleOptionsGridRightChange = value=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                options:{
                    grid:{
                        right:value
                    }
                }
            }
        })
    }
    switchBackground = (checked)=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                style:{
                    background:checked?"#ff0000":"transparent"
                }
            }
        })
    }
    moduleStyleBackgroundChange = (color)=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                style:{
                    background:color.hex
                }
            }
        })
    }
    moduleTitleShowChange = (checked)=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                options:{
                    title:{
                        show:checked
                    }
                }
            }
        })
    }
    moduleOptionsTitleTextChange = (e)=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                options:{
                    title:{
                        text:e.target.value
                    }
                }
            }
        })
    }
    moduleOptionsTitlePositionChange = value=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                options:{
                    title:{
                        left:value
                    }
                }
            }
        })
    }
    moduleOptionsTitleTopChange = value=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                options:{
                    title:{
                        top:value
                    }
                }
            }
        })
    }
    moduleOptionsTitleFontSizeChange = value=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                options:{
                    title:{
                        textStyle:{
                            fontSize:value
                        }
                    }
                }
            }
        })
    }
    moduleOptionsTitleColorChange = color=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                options:{
                    title:{
                        textStyle:{
                            color:color.hex
                        }
                    }
                }
            }
        })
    }
    moduleLegendShowChange = (checked)=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                options:{
                    legend:{
                        show:checked
                    }
                }
            }
        })
    }
    moduleOptionsLegendTopChange = value=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                options:{
                    legend:{
                        top:value
                    }
                }
            }
        })
    }
    moduleOptionsLegendFontSizeChange = (value)=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                options:{
                    legend:{
                        textStyle:{
                            fontSize:value
                        }
                    }
                }
            }
        })
    }
    moduleOptionsLegendColorChange = (color)=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                options:{
                    legend:{
                        textStyle:{
                            color:color.hex
                        }
                    }
                }
            }
        })
    }
    moduleOptionsBarWidthChange = (value)=>{
        const { id } = this.props.module
        this.props.module.options.series.map(item=>{
            item.barWidth = value
        })
        this.props.changeItemArr({
            id,
            path:["options","series"],
            data:this.props.module.options.series
        })
    }
    moduleLabelShowChange = (checked)=>{
        const { id } = this.props.module
        this.props.module.options.series.map(item=>{
            item.label.show = checked
        })
        this.props.changeItemArr({
            id,
            path:["options","series"],
            data:this.props.module.options.series
        })
    }
    moduleOptionsLabelFontSizeChange = (value)=>{
        const { id } = this.props.module
        this.props.module.options.series.map(item=>{
            item.label.fontSize = value
        })
        this.props.changeItemArr({
            id,
            path:["options","series"],
            data:this.props.module.options.series
        })
    }
    moduleOptionsLabelOffsetXChange = (value)=>{
        const { id } = this.props.module
        this.props.module.options.series.map(item=>{
            item.label.offset[0] = value
        })
        this.props.changeItemArr({
            id,
            path:["options","series"],
            data:this.props.module.options.series
        })
    }
    moduleOptionsLabelOffsetYChange = (value)=>{
        const { id } = this.props.module
        this.props.module.options.series.map(item=>{
            item.label.offset[1] = value
        })
        this.props.changeItemArr({
            id,
            path:["options","series"],
            data:this.props.module.options.series
        })
    }
    moduleOptionsxAxisColorChange = color=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                options:{
                    xAxis:{
                        axisLine:{
                            lineStyle:{
                                color:color.hex
                            }
                        },
                        axisTick:{
                            lineStyle:{
                                color:color.hex
                            }
                        }
                    }
                }
            }
        })
    }
    moduleOptionsxAxisLabelColorChange = color=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                options:{
                    xAxis:{
                        axisLabel:{
                            color:color.hex
                        }
                    }
                }
            }
        })
    }
    moduleOptionsxAxisFontSizeChange = value=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                options:{
                    xAxis:{
                        axisLabel:{
                            fontSize:value
                        }
                    }
                }
            }
        })
    }
    moduleOptionsxAxisLabelRotateChange = value=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                options:{
                    xAxis:{
                        axisLabel:{
                            rotate:value
                        }
                    }
                }
            }
        })
    }
    moduleOptionsyAxisShowChange = checked=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                options:{
                    yAxis:{
                        show:checked
                    }
                }
            }
        })
    }
    moduleOptionsyAxisColorChange = color=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                options:{
                    yAxis:{
                        axisLine:{
                            lineStyle:{
                                color:color.hex
                            }
                        },
                        axisTick:{
                            lineStyle:{
                                color:color.hex
                            }
                        }
                    }
                }
            }
        })
    }
    moduleOptionsyAxisLabelColorChange = color=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                options:{
                    yAxis:{
                        axisLabel:{
                            color:color.hex
                        }
                    }
                }
            }
        })
    } 
    moduleOptionsyAxisFontSizeChange = value=>{
        const { id } = this.props.module
        this.props.changeItem({
            id,
            data:{
                options:{
                    yAxis:{
                        axisLabel:{
                            fontSize:value
                        }
                    }
                }
            }
        })
    } 
    render(){
        const { style,options,name } = this.props.module
        // console.log(options)
        return (
            <div className="setting-form-wrap">
                <Form>
                    <Collapse bordered={false}>
                        <Panel header="基础设置" key="1">
                            <Row gutter={10}>
                                <Col span={6}>
                                    <label htmlFor="">组件名</label>
                                </Col>
                                <Col span={18}>
                                    <Form.Item>
                                        <Input
                                            value={name}
                                            onChange={this.moduleNameChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <label htmlFor="">大小</label>
                                </Col>
                                <Col span={9}>
                                    <Form.Item>
                                        <Input
                                            suffix="w" 
                                            value={style.width}
                                            onChange={this.moduleStyleWidthChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={9}>
                                    <Form.Item>
                                        <Input 
                                            suffix="h" 
                                            value={style.height}
                                            onChange={this.moduleStyleHeightChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <label htmlFor="">位置</label>
                                </Col>
                                <Col span={9}>
                                    <Form.Item>
                                        <Input 
                                            suffix="x" 
                                            value={style.x}
                                            onChange={this.moduleStyleXChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={9}>
                                    <Form.Item>
                                        <Input 
                                            suffix="y" 
                                            value={style.y}
                                            onChange={this.moduleStyleYChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <label htmlFor="">边距</label>
                                </Col>
                                <Col span={9}>
                                    <Form.Item>
                                        <InputNumber
                                            min={0}
                                            formatter={value => `上 ${value}`}
                                            value={options.grid.top}
                                            onChange={this.moduleOptionsGridTopChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={9}>
                                    <Form.Item>
                                        <InputNumber
                                            min={0}
                                            formatter={value => `下 ${value}`}
                                            value={options.grid.bottom}
                                            onChange={this.moduleOptionsGridBottomChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    
                                </Col>
                                <Col span={9}>
                                    <Form.Item>
                                        <InputNumber
                                            min={0}
                                            formatter={value => `左 ${value}`}
                                            value={options.grid.left}
                                            onChange={this.moduleOptionsGridLeftChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={9}>
                                    <Form.Item>
                                        <InputNumber
                                            min={0}
                                            formatter={value => `右 ${value}`}
                                            value={options.grid.right}
                                            onChange={this.moduleOptionsGridRightChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <label htmlFor="">背景色</label>
                                </Col>
                                <Col span={18}>
                                    <Switch 
                                        checked={style.background!=='transparent'}
                                        style={{marginTop:5}}
                                        onChange={this.switchBackground}
                                    />
                                </Col>
                                {
                                    style.background==="transparent"?
                                    ""
                                    :
                                    <Col span={18} push={6}>
                                        <ColorPicker 
                                            value={style.background}
                                            onChange={this.moduleStyleBackgroundChange}
                                        />
                                    </Col>
                                }
                            </Row>
                        </Panel>
                        <Panel header="标题" key="2">
                            <Row>
                                <Col span={7}>
                                    <label htmlFor="">显示</label>
                                </Col>
                                <Col span={17}>
                                    <Form.Item>
                                        <Switch
                                            checked={options.title.show}
                                            onChange={this.moduleTitleShowChange}
                                        />
                                    </Form.Item>
                                </Col>
                                {
                                    options.title.show?<Fragment>
                                        <Col span={7}>
                                            <label htmlFor="">标题</label>
                                        </Col>
                                        <Col span={17}>
                                            <Form.Item>
                                                <Input 
                                                    value={options.title.text}
                                                    onChange={this.moduleOptionsTitleTextChange}
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col span={7}>
                                            <label htmlFor="">位置</label>
                                        </Col>
                                        <Col span={17}>
                                            <Form.Item>
                                                <Select
                                                    placeholder="请选择"
                                                    value={options.title.left}
                                                    dropdownClassName="dark-style"
                                                    onChange={this.moduleOptionsTitlePositionChange}
                                                >
                                                    <Option value="left">居左</Option>
                                                    <Option value="center">居中</Option>
                                                    <Option value="right">居右</Option>
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                        <Col span={7}>
                                            <label htmlFor="">间距</label>
                                        </Col>
                                        <Col span={17}>
                                            <Form.Item>
                                                <InputNumber 
                                                    min={0}
                                                    style={{width:174}}
                                                    value={options.title.top} 
                                                    onChange={this.moduleOptionsTitleTopChange} 
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col span={7}>
                                            <label htmlFor="">字体大小</label>
                                        </Col>
                                        <Col span={17}>
                                            <Form.Item>
                                                <InputNumber 
                                                    min={12}
                                                    style={{width:174}}
                                                    value={options.title.textStyle.fontSize} 
                                                    onChange={this.moduleOptionsTitleFontSizeChange} 
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col span={7}>
                                            <label htmlFor="">字体颜色</label>
                                        </Col>
                                        <Col span={17}>
                                            <Form.Item>
                                                <ColorPicker 
                                                    value={options.title.textStyle.color}
                                                    onChange={this.moduleOptionsTitleColorChange}
                                                />
                                            </Form.Item>
                                        </Col>
                                    </Fragment>:""
                                }
                            </Row>
                        </Panel>
                        <Panel header="图例" key="3">
                            <Row>
                                <Col span={7}>
                                    <label htmlFor="">显示</label>
                                </Col>
                                <Col span={17}>
                                    <Form.Item>
                                        <Switch
                                            checked={options.legend.show}
                                            onChange={this.moduleLegendShowChange}
                                        />
                                    </Form.Item>
                                </Col>
                                {
                                    options.legend.show?<Fragment>
                                        <Col span={7}>
                                            <label htmlFor="">间距</label>
                                        </Col>
                                        <Col span={17}>
                                            <Form.Item>
                                                <InputNumber 
                                                    min={0}
                                                    style={{width:174}}
                                                    value={options.legend.top} 
                                                    onChange={this.moduleOptionsLegendTopChange} 
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col span={7}>
                                            <label htmlFor="">字体大小</label>
                                        </Col>
                                        <Col span={17}>
                                            <Form.Item>
                                                <InputNumber 
                                                    min={12}
                                                    style={{width:174}}
                                                    value={options.legend.textStyle.fontSize} 
                                                    onChange={this.moduleOptionsLegendFontSizeChange} 
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col span={7}>
                                            <label htmlFor="">字体颜色</label>
                                        </Col>
                                        <Col span={17}>
                                            <Form.Item>
                                                <ColorPicker 
                                                    value={options.legend.textStyle.color}
                                                    onChange={this.moduleOptionsLegendColorChange}
                                                />
                                            </Form.Item>
                                        </Col>
                                    </Fragment>:""
                                }
                            </Row>
                        </Panel>
                        <Panel header="柱图样式" key="4">
                            <Row>
                                <Col span={7}>
                                    <label htmlFor="">柱宽</label>
                                </Col>
                                <Col span={17}>
                                    <Form.Item>
                                        <InputNumber 
                                            min={10}
                                            style={{width:174}}
                                            value={options.series[0].barWidth} 
                                            onChange={this.moduleOptionsBarWidthChange} 
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={7}>
                                    <label htmlFor="">显示文字</label>
                                </Col>
                                <Col span={17}>
                                    <Form.Item>
                                        <Switch
                                            checked={options.series[0].label.show}
                                            onChange={this.moduleLabelShowChange}
                                        />
                                    </Form.Item>
                                </Col>
                                {
                                    options.series[0].label.show?<Fragment>
                                        <Col span={7}>
                                            <label htmlFor="">文字大小</label>
                                        </Col>
                                        <Col span={17}>
                                            <Form.Item>
                                                <InputNumber 
                                                    min={12}
                                                    style={{width:174}}
                                                    value={options.series[0].label.fontSize} 
                                                    onChange={this.moduleOptionsLabelFontSizeChange} 
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col span={7}>
                                            <label htmlFor="">文字偏移</label>
                                        </Col>
                                        <Col span={17}>
                                            <InputNumber
                                                style={{width:80}}
                                                value={options.series[0].label.offset[0]} 
                                                onChange={this.moduleOptionsLabelOffsetXChange} 
                                            />
                                            <InputNumber
                                                style={{width:80,marginLeft:12}}
                                                value={options.series[0].label.offset[1]} 
                                                onChange={this.moduleOptionsLabelOffsetYChange} 
                                            />
                                        </Col>
                                    </Fragment>:""
                                }
                            </Row>
                        </Panel>
                        <Panel header="X轴" key="5">
                            <Row>
                                <Col span={7}>
                                    <label htmlFor="">轴线颜色</label>
                                </Col>
                                <Col span={17}>
                                    <Form.Item>
                                        <ColorPicker 
                                            value={options.xAxis.axisLine.lineStyle.color}
                                            onChange={this.moduleOptionsxAxisColorChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={7}>
                                    <label htmlFor="">文字颜色</label>
                                </Col>
                                <Col span={17}>
                                    <Form.Item>
                                        <ColorPicker 
                                            value={options.xAxis.axisLabel.color}
                                            onChange={this.moduleOptionsxAxisLabelColorChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={7}>
                                    <label htmlFor="">文字大小</label>
                                </Col>
                                <Col span={17}>
                                    <Form.Item>
                                        <InputNumber 
                                            min={12}
                                            style={{width:174}}
                                            value={options.xAxis.axisLabel.fontSize} 
                                            onChange={this.moduleOptionsxAxisFontSizeChange} 
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={7}>
                                    <label htmlFor="">文字角度</label>
                                </Col>
                                <Col span={17}>
                                    <Form.Item>
                                        <Select
                                            placeholder="请选择"
                                            value={options.xAxis.axisLabel.rotate}
                                            dropdownClassName="dark-style"
                                            onChange={this.moduleOptionsxAxisLabelRotateChange}
                                        >
                                            <Option value={0}>水平</Option>
                                            <Option value={45}>倾斜</Option>
                                            <Option value={90}>垂直</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Panel>
                        <Panel header="Y轴" key="6">
                            <Row>
                                <Col span={7}>
                                    <label htmlFor="">显示</label>
                                </Col>
                                <Col span={17}>
                                    <Form.Item>
                                        <Switch
                                            checked={options.yAxis.show}
                                            onChange={this.moduleOptionsyAxisShowChange}
                                        />
                                    </Form.Item>
                                </Col>
                                {
                                    options.yAxis.show?<Fragment>
                                        <Col span={7}>
                                            <label htmlFor="">轴线颜色</label>
                                        </Col>
                                        <Col span={17}>
                                            <Form.Item>
                                                <ColorPicker 
                                                    value={options.yAxis.axisLine.lineStyle.color}
                                                    onChange={this.moduleOptionsyAxisColorChange}
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col span={7}>
                                            <label htmlFor="">文字颜色</label>
                                        </Col>
                                        <Col span={17}>
                                            <Form.Item>
                                                <ColorPicker 
                                                    value={options.yAxis.axisLabel.color}
                                                    onChange={this.moduleOptionsyAxisLabelColorChange}
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col span={7}>
                                            <label htmlFor="">文字大小</label>
                                        </Col>
                                        <Col span={17}>
                                            <Form.Item>
                                                <InputNumber 
                                                    min={12}
                                                    style={{width:174}}
                                                    value={options.yAxis.axisLabel.fontSize} 
                                                    onChange={this.moduleOptionsyAxisFontSizeChange} 
                                                />
                                            </Form.Item>
                                        </Col>
                                    </Fragment>:""
                                }
                            </Row>
                        </Panel>
                        <Panel header="数据系列" key="7">
                            <Fragment>
                                {
                                    options.series.map((item,index)=>{
                                        return <Fragment key={item.name}>
                                        {index?<Divider dashed={true} />:""}
                                        <Row 
                                                    key={item.name}
                                                >
                                            <Col span={24}>
                                                <div className="setting-serise-title clear-fixed-after">
                                                    <span>系列{++index}</span>
                                                    <i className="iconfont icon-garbage"></i>
                                                </div>
                                            </Col>
                                            <Col span={7}>
                                                <label htmlFor="">系列key</label>
                                            </Col>
                                            <Col span={17}>
                                                <Form.Item>
                                                    <Input 
                                                        value={item.name}
                                                    />
                                                </Form.Item>
                                            </Col>
                                            <Col span={7}>
                                                <label htmlFor="">系列名称</label>
                                            </Col>
                                            <Col span={17}>
                                                <Form.Item>
                                                    <Input 
                                                        value={item.name}
                                                    />
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                    </Fragment>
                                    })
                                }
                                <span className="add-serise"><i className="iconfont icon-add"></i>添加系列</span>
                            </Fragment>
                        </Panel>
                    </Collapse>
                </Form>
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps)=>{
    return {
        
    }
}
const mapDispatchToProps = dispatch=>{
    return {
        changeItem(data){
            const action = changeItem(data)
            dispatch(action)
        },
        changeItemArr(data){
            const action = changeItemArr(data)
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SettingPropsForm)