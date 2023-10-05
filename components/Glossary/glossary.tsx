import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const CenteredContentContainer = styled.div`
  ${tw`flex flex-col items-center justify-center h-screen`}
  margin-top:35%;
  margin-bottom:40%;

  .headers{
    font-size: 16px;
    font-weight: bold;
    color: rgba(96,112,125,1.0);
  }

  .content{
    font-size: 16px;
    color: rgba(96,112,125,1.0);
  }
`;

const Title = styled.h1`
  ${tw`text-3xl mb-3`}
  font-family: 'Roboto';
  color: #60707D;
  line-height: 55px;
  font-size: 40px;
  font-weight: bold;
`;

const Paragraph = styled.p`
font-size: 20px;
color: #60707D;
font-family: Roboto,
padding-left: 50%;
width:87%;
margin-top: 2%;
text-align: center;
`;

const Table = styled.table`
  ${tw`  mt-4`}
  border: 1px solid black;
  width: 80%;
`;

const TableHeader = styled.th`
  ${tw` p-4`}
  font-size: 16px;
  color: rgba(96,112,125,1.0);
  font-family: 'Roboto';
  text-align: center;
  border: 1px solid black;
  
`;

const TableCell = styled.td`
  ${tw` p-4`}
  border: 1px solid black;
`;


interface ContentWithTableProps {
  title: string;
  paragraph: string;
  tableData: { header: string; content: string }[];
}

const ContentWithTable: React.FC<ContentWithTableProps> = ({
  title,
  paragraph,
  tableData,
}) => {
  return (
    <CenteredContentContainer>
      <Title>{title}</Title>
      <Paragraph>{paragraph}</Paragraph>
      <Table>
        <thead>
          <tr>
            <TableHeader>Style</TableHeader>
            <TableHeader>Description</TableHeader>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <TableCell className="headers" style={{width:'20%'}}>{row.header}</TableCell>
              <TableCell className="content">{row.content}</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
    </CenteredContentContainer>
  );
};

export default ContentWithTable;
