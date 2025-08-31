import { Container, Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-gray-100 ">
      <Container
        maxWidth="sm"
        className="h-screen flex justify-center items-center"
      >
        <Box className="bg-white py-8 px-24 rounded-2xl shadow-sm flex flex-col justify-center items-center">
          <h1 className="text-center text-5xl font-bold mb-8">Todo List</h1>
          <Outlet />
        </Box>
      </Container>
    </div>
  );
}
