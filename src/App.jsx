import { Box } from "@chakra-ui/react";
import useAuthLogin from "./hooks/authLogin";
import Login from "./pages/Authentication/Login";
import WithSideBar from "./components/Layouts/WithSideBar";
import WithTopBar from "./components/Layouts/WithTopBar";
import MainRouter from "./routers/MainRouter";

function App() {
  // Login
  const { isLoggedIn } = useAuthLogin();

  return (
    <>
      {!isLoggedIn ? (
        <Box>
          <Login />
        </Box>
      ) : (
        <>
          <Box display={{ base: "none", lg: "flex" }}>
            <WithSideBar>
              <MainRouter />
            </WithSideBar>
          </Box>
          <Box display={{ base: "flex", lg: "none" }}>
            <WithTopBar>
              <MainRouter />
            </WithTopBar>
          </Box>
        </>
      )}
    </>
  );
}

export default App;
