import { data } from './data';
import Charts from './Charts';
import Table from './Table';

export default function Admin() {
  return (<div className='admin-page'>
    <Charts />
    <Table data={data}/>
  </div>);
}