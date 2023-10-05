import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  color: #60707D;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 40px;
  margin-right:200px;
`;

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 95%;
  margin-right:10%;
  margin-top: 30px;
  margin-bottom:10%;
`;

const TableHeader = styled.th`
  border-bottom: 2px solid black;
  padding: 10px 15px;
  background-color:#F0F7FF;
  color:#87879B;
  font-size:16px;
  font-family:Roboto,
`;

const TableCell = styled.td`
  border-bottom: 1px solid black;
  padding: 10px 15px;
  text-align: center;
  
  .btn{
    border-color: #ef1c1c;
    color: #ef1c1c;
    border-width: 1px;
    border-style: solid;
    background-color: transparent;
    padding: 0.7rem;
    display: inline;
    font-size: 75%;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25em;
  }

  .btnn{
    border-color: #73c7fc;
    color: #73c7fc;
    border-width: 1px;
    border-style: solid;
    background-color: transparent;
    padding: 0.7rem;
    display: inline;
    font-size: 75%;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25em;
  }
`;

const TableComponent = () => {
  return (
    <TableWrapper>
      <Title>ORDERS</Title>
      <Table>
        <thead>
          <tr>
            <TableHeader>Purchase Order ID</TableHeader>
            <TableHeader>Order Description</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Creation Date</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCell><div className='btnn'>AO20220512-9P6L</div></TableCell>
            <TableCell>Windows: 1 Price: 528.94 <span style={{color:'#0D6EFD',fontSize:'18px',fontFamily:'Roboto'}}>View More</span></TableCell>
            <TableCell><div className='btn'>pending</div></TableCell>
            <TableCell>12-05-2022</TableCell>
          </tr>
          <tr>
            <TableCell><div className='btnn'>AO20220602-X3IQ</div></TableCell>
            <TableCell>Windows: 2 Price: 333.82 <span style={{color:'#0D6EFD',fontSize:'18px',fontFamily:'Roboto'}}>View More</span></TableCell>
            <TableCell><div className='btn'>pending</div></TableCell>
            <TableCell>02-06-2022</TableCell>
          </tr>
          <tr>
            <TableCell><div className='btnn'>AO20220506-TKLW</div></TableCell>
            <TableCell>Windows: 4 Price: 31.50 <span style={{color:'#0D6EFD',fontSize:'18px',fontFamily:'Roboto'}}>View More</span></TableCell>
            <TableCell><div className='btn'>pending</div></TableCell>
            <TableCell>06-05-2022</TableCell>
          </tr>
          <tr>
            <TableCell><div className='btnn'>AO20220506-TKLW</div></TableCell>
            <TableCell>Windows: 2 Price: 649.64 <span style={{color:'#0D6EFD',fontSize:'18px',fontFamily:'Roboto'}}>View More</span></TableCell>
            <TableCell><div className='btn'>pending</div></TableCell>
            <TableCell>06-05-2022</TableCell>
          </tr>
          <tr>
            <TableCell><div className='btnn'>AO20220506-TKLW</div></TableCell>
            <TableCell>Windows: 11 Price: 6662.27 <span style={{color:'#0D6EFD',fontSize:'18px',fontFamily:'Roboto'}}>View More</span></TableCell>
            <TableCell><div className='btn'>pending</div></TableCell>
            <TableCell>02-05-2022</TableCell>
          </tr>
          <tr>
            <TableCell><div className='btnn'>AO20220506-TKLW</div></TableCell>
            <TableCell>Windows: 3 Price: 849.71 <span style={{color:'#0D6EFD',fontSize:'18px',fontFamily:'Roboto'}}>View More</span></TableCell>
            <TableCell><div className='btn'>pending</div></TableCell>
            <TableCell>13-05-2022</TableCell>
          </tr>
          <tr>
            <TableCell><div className='btnn'>AO20220506-TKLW</div></TableCell>
            <TableCell>Windows: 1 Price: 103.88 <span style={{color:'#0D6EFD',fontSize:'18px',fontFamily:'Roboto'}}>View More</span></TableCell>
            <TableCell><div className='btn'>pending</div></TableCell>
            <TableCell>31-05-2022</TableCell>
          </tr>
          <tr>
            <TableCell><div className='btnn'>AO20220506-TKLW</div></TableCell>
            <TableCell>Windows: 1 Price: 40.51 <span style={{color:'#0D6EFD',fontSize:'18px',fontFamily:'Roboto'}}>View More</span></TableCell>
            <TableCell><div className='btn'>pending</div></TableCell>
            <TableCell>09-05-2022</TableCell>
          </tr>
          <tr>
            <TableCell><div className='btnn'>AO20220506-TKLW</div></TableCell>
            <TableCell>Windows: 1 Price: 755.10 <span style={{color:'#0D6EFD',fontSize:'18px',fontFamily:'Roboto'}}>View More</span></TableCell>
            <TableCell><div className='btn'>pending</div></TableCell>
            <TableCell>31-01-2022</TableCell>
          </tr>
          <tr>
            <TableCell><div className='btnn'>AO20220506-TKLW</div></TableCell>
            <TableCell>Windows: 1 Price: 37.80 <span style={{color:'#0D6EFD',fontSize:'18px',fontFamily:'Roboto'}}>View More</span></TableCell>
            <TableCell><div className='btn'>pending</div></TableCell>
            <TableCell>13-05-2022</TableCell>
          </tr>
          <tr>
            <TableCell><div className='btnn'>AO20220506-TKLW</div></TableCell>
            <TableCell>Windows: 1 Price: 515.31 <span style={{color:'#0D6EFD',fontSize:'18px',fontFamily:'Roboto'}}>View More</span></TableCell>
            <TableCell><div className='btn'>pending</div></TableCell>
            <TableCell>19-05-2022</TableCell>
          </tr>
          <tr>
            <TableCell><div className='btnn'>AO20220506-TKLW</div></TableCell>
            <TableCell>Windows: 1 Price: 16.80 <span style={{color:'#0D6EFD',fontSize:'18px',fontFamily:'Roboto'}}>View More</span></TableCell>
            <TableCell><div className='btn'>pending</div></TableCell>
            <TableCell>06-05-2022</TableCell>
          </tr>
          <tr>
            <TableCell><div className='btnn'>AO20220506-TKLW</div></TableCell>
            <TableCell>Windows: 1 Price: 1145.97 <span style={{color:'#0D6EFD',fontSize:'18px',fontFamily:'Roboto'}}>View More</span></TableCell>
            <TableCell><div className='btn'>pending</div></TableCell>
            <TableCell>12-05-2022</TableCell>
          </tr>
          <tr>
            <TableCell><div className='btnn'>AO20220506-TKLW</div></TableCell>
            <TableCell>Windows: 1 Price: 83.42 <span style={{color:'#0D6EFD',fontSize:'18px',fontFamily:'Roboto'}}>View More</span></TableCell>
            <TableCell><div className='btn'>pending</div></TableCell>
            <TableCell>01-04-2022</TableCell>
          </tr>
          <tr>
            <TableCell><div className='btnn'>AO20220506-TKLW</div></TableCell>
            <TableCell>Windows: 2 Price: 4276.90 <span style={{color:'#0D6EFD',fontSize:'18px',fontFamily:'Roboto'}}>View More</span></TableCell>
            <TableCell>Row 2, Cell 3</TableCell>
            <TableCell>02-02-2022</TableCell>
          </tr>
          <tr>
            <TableCell><div className='btnn'>AO20220506-TKLW</div></TableCell>
            <TableCell>Windows: 2 Price: 414.75 <span style={{color:'#0D6EFD',fontSize:'18px',fontFamily:'Roboto'}}>View More</span></TableCell>
            <TableCell>Row 2, Cell 3</TableCell>
            <TableCell>14-05-2022</TableCell>
          </tr>
          <tr>
            <TableCell><div className='btnn'>AO20220506-TKLW</div></TableCell>
            <TableCell>Windows: 1 Price: 122.85 <span style={{color:'#0D6EFD',fontSize:'18px',fontFamily:'Roboto'}}>View More</span></TableCell>
            <TableCell>Row 2, Cell 3</TableCell>
            <TableCell>11-05-2022</TableCell>
          </tr>
          <tr>
            <TableCell><div className='btnn'>AO20220506-TKLW</div></TableCell>
            <TableCell>Windows: 1 Price: 96.08 <span style={{color:'#0D6EFD',fontSize:'18px',fontFamily:'Roboto'}}>View More</span></TableCell>
            <TableCell>Row 2, Cell 3</TableCell>
            <TableCell>25-04-2022</TableCell>
          </tr>
          <tr>
            <TableCell><div className='btnn'>AO20220506-TKLW</div></TableCell>
            <TableCell>Windows: 1 Price: 37.80 <span style={{color:'#0D6EFD',fontSize:'18px',fontFamily:'Roboto'}}>View More</span></TableCell>
            <TableCell>Row 2, Cell 3</TableCell>
            <TableCell>13-05-2022</TableCell>
          </tr>
          <tr>
            <TableCell><div className='btnn'>AO20220506-TKLW</div></TableCell>
            <TableCell>Windows: 1 Price: 95.40 <span style={{color:'#0D6EFD',fontSize:'18px',fontFamily:'Roboto'}}>View More</span></TableCell>
            <TableCell>Row 2, Cell 3</TableCell>
            <TableCell>02-06-2022</TableCell>
          </tr>
          <tr>
            <TableCell><div className='btnn'>AO20220506-TKLW</div></TableCell>
            <TableCell>Windows: 1 Price: 1620.93 <span style={{color:'#0D6EFD',fontSize:'18px',fontFamily:'Roboto'}}>View More</span></TableCell>
            <TableCell>Row 2, Cell 3</TableCell>
            <TableCell>01-02-2022</TableCell>
          </tr>
          <tr>
            <TableCell><div className='btnn'>AO20220506-TKLW</div></TableCell>
            <TableCell>Windows: 1 Price: 89.25 <span style={{color:'#0D6EFD',fontSize:'18px',fontFamily:'Roboto'}}>View More</span></TableCell>
            <TableCell>Row 2, Cell 3</TableCell>
            <TableCell>18-05-2022</TableCell>
          </tr>
          <tr>
            <TableCell><div className='btnn'>AO20220506-TKLW</div></TableCell>
            <TableCell>Windows: 1 Price: 106.00 <span style={{color:'#0D6EFD',fontSize:'18px',fontFamily:'Roboto'}}>View More</span></TableCell>
            <TableCell>Row 2, Cell 3</TableCell>
            <TableCell>02-06-2022</TableCell>
          </tr>
          <tr>
            <TableCell><div className='btnn'>AO20220506-TKLW</div></TableCell>
            <TableCell>Windows: 1 Price: 57.65 <span style={{color:'#0D6EFD',fontSize:'18px',fontFamily:'Roboto'}}>View More</span></TableCell>
            <TableCell>Row 2, Cell 3</TableCell>
            <TableCell>09-05-2022</TableCell>
          </tr>
          <tr>
            <TableCell><div className='btnn'>AO20220506-TKLW</div></TableCell>
            <TableCell>Windows: 2 Price: 32.93 <span style={{color:'#0D6EFD',fontSize:'18px',fontFamily:'Roboto'}}>View More</span></TableCell>
            <TableCell>Row 2, Cell 3</TableCell>
            <TableCell>07-06-2022</TableCell>
          </tr>
          <tr>
            <TableCell><div className='btnn'>AO20220506-TKLW</div></TableCell>
            <TableCell>Windows: 4 Price: 369.26 <span style={{color:'#0D6EFD',fontSize:'18px',fontFamily:'Roboto'}}>View More</span></TableCell>
            <TableCell>Row 2, Cell 3</TableCell>
            <TableCell>16-05-2022</TableCell>
          </tr>
          <tr>
            <TableCell><div className='btnn'>AO20220506-TKLW</div></TableCell>
            <TableCell>Windows: 1 Price: 206.21 <span style={{color:'#0D6EFD',fontSize:'18px',fontFamily:'Roboto'}}>View More</span></TableCell>
            <TableCell>Row 2, Cell 3</TableCell>
            <TableCell>02-04-2022</TableCell>
          </tr>
          <tr>
            <TableCell><div className='btnn'>AO20220506-TKLW</div></TableCell>
            <TableCell>Windows: 1 Price: 105.00 <span style={{color:'#0D6EFD',fontSize:'18px',fontFamily:'Roboto'}}>View More</span></TableCell>
            <TableCell>Row 2, Cell 3</TableCell>
            <TableCell>13-05-2022</TableCell>
          </tr>
          <tr>
            <TableCell><div className='btnn'>AO20220506-TKLW</div></TableCell>
            <TableCell>Windows: 11 Price: 6662.27 <span style={{color:'#0D6EFD',fontSize:'18px',fontFamily:'Roboto'}}>View More</span></TableCell>
            <TableCell>Row 2, Cell 3</TableCell>
            <TableCell>29-04-2022</TableCell>
          </tr>
          <tr>
            <TableCell><div className='btnn'>AO20220506-TKLW</div></TableCell>
            <TableCell>Windows: 2 Price: 172.20 <span style={{color:'#0D6EFD',fontSize:'18px',fontFamily:'Roboto'}}>View More</span></TableCell>
            <TableCell>Row 2, Cell 3</TableCell>
            <TableCell>11-05-2022</TableCell>
          </tr>

        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default TableComponent;
