import React from 'react';
import MaterialTable from 'material-table';

export default function Table({ data }) {
  return (
    <div style={{ maxWidth: '100%', marginBottom: '100px' }}>
      <MaterialTable
        columns={
          [
            { title: 'Customer ID', field: 'id' },
            { title: 'First Name', field: 'first_name' },
            { title: 'Surname', field: 'last_name' },
            { title: 'Prescription', field: 'prescription' },
            { title: 'Credit Card', field: 'credit_card' },
            { title: 'Diagnosis code', field: 'diagnosis' }
          ]
        }
        data={data}
        title="Customers in past week"
        options={{
          headerStyle: {
            background: 'brown',
            border: '1px solid burlywood'
          },
          rowStyle: {
            background: 'cyan'
          }
        }} />
    </div>
  );
}
