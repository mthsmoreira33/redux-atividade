import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { useAppDispatch } from "../store/hooks";
import { deleteTransfer } from "../store/slices/transfersSlice";

interface ITransferCardProps {
  id: number;
  value: string;
  type: "Entrada" | "Saída";
  description: string;
}

export function TransferCard({id, value, type, description}: ITransferCardProps) {
  const dispatch = useAppDispatch()

  function handleDeleteRecommendation() {
    dispatch(deleteTransfer(id))
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body1">{content}</Typography>
      </CardContent>

      <CardActions>
        <Button onClick={handleDeleteRecommendation}>Excluir</Button>
      </CardActions>
    </Card>
  )
}
