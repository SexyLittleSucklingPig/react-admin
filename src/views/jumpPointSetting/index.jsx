import React, { memo,useState } from 'react'
import { HomeWrapper } from './style'
import welcome from '@/assets/images/welcome01.png'
import { Table,Button,Modal, Select, Space } from "antd";


const Home = memo(() => {
	//表格数据
	const dataSource = [
		{
		  key: '1',
		  mapName: '胡彦斌',
		  jumpPoints: 32,
		  initialization: '西湖区湖底公园1号',
		  modified: '西湖区湖底公园1号',
		},
		
	  ];
	  const columns = [
		{
		  title: '地图',
		  dataIndex: 'mapName',
		  key: 'mapName',
		},
		{
		  title: '跳变点',
		  dataIndex: 'jumpPoints',
		  key: 'jumpPoints',
		},
		{
		  title: '初始值',
		  dataIndex: 'initialization',
		  key: 'initialization',
		},
		{
		  title: '修改值',
		  dataIndex: 'modified',
		  key: 'modified',
		},
	  ];
	  //设置跳变点弹框
	  const [isModalOpen, setIsModalOpen] = useState(false);
	  //显示
	  const showModal = () => {
		setIsModalOpen(true);
	  };
	  //弹框确认
	  const handleOk = () => {
		setIsModalOpen(false);
	  };
	  //弹框取消
	  const handleCancel = () => {
		setIsModalOpen(false);
	  };
	  //下拉框
	  const [selectList,setSelectList]=useState([
		{
		value: 'jack',
		label: 'Map01',
		},
		{
		value: 'lucy',
		label: 'Map02',
		},
		{
		value: 'Yiminghe',
		label: 'Map03',
		},
		{
		value: 'disabled',
		label: 'Map04',
		},
	])
	  //下拉框修改值后
	  const handleChange = (value) => {
		console.log(`selected ${value}`);
	  };

	return (
		<HomeWrapper className='card'>	
		<div className='operation'>
			<div>
				<span>
					当前地图： 
				</span>
				<Space wrap>
				<Select
				defaultValue="lucy"
				style={{
					width: 120,
				}}
				onChange={handleChange}
				options={selectList}
				/>
				</Space>
			</div>
			<div>
				<Button type="primary" onClick={showModal}>设置跳变点</Button>
			</div>
		</div>
		<Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
			<p>Some contents...</p>
		</Modal>
		<Table dataSource={dataSource} columns={columns}/>
		</HomeWrapper>
	)
})

Home.displayName = 'Home'

export default Home
