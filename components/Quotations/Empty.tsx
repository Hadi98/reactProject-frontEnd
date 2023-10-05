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
  
  padding: 10px 15px;
  background-color:#F0F7FF;
  color:#87879B;
  font-size:16px;
  font-family:Roboto,
`;



const Empty = () => {
  return (
    <TableWrapper>
      <Title>QUOTATIONS</Title>
      <Table>
        <thead>
          <tr>
            <TableHeader>Purchase Order ID</TableHeader>
            <TableHeader>Order Description</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Creation Date</TableHeader>
            <TableHeader>Edit</TableHeader>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default Empty;
