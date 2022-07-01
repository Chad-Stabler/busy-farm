import { data } from './data';
import Charts from './Charts';
import Table from './Table';

export default function Admin() {
  return (<div>
    <Charts />
    <Table data={data}/>
  </div>);
}