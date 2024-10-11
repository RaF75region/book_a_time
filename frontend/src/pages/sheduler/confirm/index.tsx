import { useEffect, useState } from "react"
import { GreeterClient } from "../../../models/GreetServiceClientPb";
import { HelloRequest } from "../../../models/greet_pb";
import { Box, Button, Divider, Stack, Textarea, Typography } from "@mui/joy";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';


export default function Confirm() {
  const [greeting, setGreeting] = useState('');

  const handleSayHello = async (name: string) => {
    const client = new GreeterClient("https://localhost:7163");
    const req = new HelloRequest();
    req.setName(name);
    const metadata = { 'custom-header-1': 'value1' };
    client.sayHello(req, metadata, (err, response) => {
      if (err) {
        console.error('Error:', err);
      } else {
        console.log('Response:', response.getMessage());
        setGreeting(response.getMessage())
      }
    });
  };

  useEffect(() => {
    const initializeProto = async () => {
      await handleSayHello("Aleks");
    }
    initializeProto();
  }, [])

  return <Stack direction="column"
    justifyContent="center"
    alignItems="start"
  >
    <Box display="flex"
      sx={{
        margin: 2,
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.19)"
      }}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="start"
        spacing={1}
        margin={2}
      >
        <Typography level="title-sm">1. dsa</Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          width="100%"
        >
          <Typography color="success" level="body-sm">100$</Typography>
          <Typography level="body-sm">8:15 - 9:00 (45min)</Typography>
        </Stack>
        <Typography level="body-sm" fontWeight={300} textAlign="left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </Typography>

      </Stack>
      <Stack direction="column"
        justifyContent="center"
        alignItems="center"
        margin={2}>
        <Typography level="h1">30</Typography>
        <Typography level="title-md">JUL</Typography>
      </Stack>
    </Box>
    <Divider sx={{ marginLeft: 2, marginRight: 2, marginBottom: 2 }} inset="context" />
    <Stack direction="row"
      spacing={2}
      sx={{ marginLeft: 2 }}
      justifyContent="center"
      alignItems="center"
    >
      <AddCommentOutlinedIcon fontSize="small" />
      <Typography level="body-sm">Доп. информация</Typography>
    </Stack>
    <Box sx={{width:"100%", padding:2}}>
      <Textarea minRows={2} variant="plain" sx={{
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.19)",
        '--Textarea-focusedHighlight': '2px solid red !important'
        }}/>
    </Box>
    <Box sx={{width:"100%", padding:2}} display="flex" justifyContent="start">
        <Button fullWidth color="success">Подтвердить заказ</Button>
    </Box>

  </Stack>
}