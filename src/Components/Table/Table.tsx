import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./Table.css"

function createData(
  user: string,
  settings: string
) {
  return { user, settings};
}

const rows1 = [
  createData('User1', 'Settings'),
  createData('User2', 'Settings'),
];

const rows2 = [
    createData('Instance1', 'Settings'),
    createData('Instance2', 'Settings'),
  ];



export default function TableData() {
  return (
    <>
    <TableContainer component={Paper} style={{marginLeft:"380px", marginRight:"200px", width:500}}>
      <Table sx={{ minWidth: 50}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Users</TableCell>
            <TableCell align="right">Settings</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows1.map((row) => (
            <TableRow
              key={row.user}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.user}
              </TableCell>
              <TableCell align="right">{row.settings}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <br /><br />
    <TableContainer component={Paper} style={{marginLeft:"380px", marginRight:"200px", width:500}}>
    <Table sx={{ minWidth: 50}} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Instances</TableCell>
          <TableCell align="right">Settings</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows2.map((row) => (
          <TableRow
            key={row.user}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.user}
            </TableCell>
            <TableCell align="right">{row.settings}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </>
  );
}
