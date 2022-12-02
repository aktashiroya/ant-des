import './App.css';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from '@ant-design/icons';


function App() {
  return (
    <>
      <Button type="primary">Primary Button</Button>
      <br />
      <button type="primary">primary</button>
      <br />
      <button type="primary" disabled>primary(disabled)</button>
      {/* <div><LogoutOutlined /></div> */}
      <HomeOutlined />
    <SettingFilled />
    <SmileOutlined />
    <SyncOutlined spin />
    <SmileOutlined rotate={80} />
    <LoadingOutlined />

    </>
  );
}

export default App;
