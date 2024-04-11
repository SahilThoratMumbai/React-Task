
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { deleteEmployee, fetchEmployees } from "../API/apiEmployee";

function EmployeeData() {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);

  async function handleDelete(id) {
    const data = await deleteEmployee(id);

    setEmployees(employees.filter((employee) => employee.id !== data.id));
  }

  // Fetch all employees on initial mount
  useEffect(function () {
    async function fetchData() {
      const data = await fetchEmployees();
      setEmployees(data);
    }
    fetchData();
  }, []);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
      editable: false,
    },
    {
      field: "firstName",
      headerName: "First Name",
      width: 120,
      editable: false,
    },
    {
        field: "lastName",
        headerName: "Last Name",
        width: 120,
        editable: false,
      },
    {
      field: "email",
      headerName: "Email",
      width: 90,
      editable: false,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      width: 150,
      editable: false,
    },
   
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => (
        <div>
          <IconButton
            aria-label="edit"
            onClick={() => navigate(`/FormDetails/${params.id}`)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={() => handleDelete(params.row.id)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      ),
    },
  ];

  return (
    <Box component="div">
      <Box sx={{ height: 400, width: "50%", margin: "0 auto" }}>
        <Button
          onClick={() => navigate("FormDetails")}
          variant="contained"
          size="large"
          sx={{ fontSize: "1.2rem" }}
        >
          Create New EMployee
        </Button>
        <DataGrid
          autoHeight
          rows={employees}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
          sx={{
            m: 2,
            fontSize: "1.2rem",
            fontFamily: "inherit",
          }}
          loading={!employees.length}
        />
      </Box>
    </Box>
  );
}

export default EmployeeData;
