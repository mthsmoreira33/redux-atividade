import { Button, Grid, TextField } from "@mui/material";
import { FormEvent, useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { addTransfer } from "../store/slices/transfersSlice";

export function RecommendationForm() {
  const dispatch = useAppDispatch()

  const [value, setValue] = useState(0)
  const [type, setType] = useState<'Entrada' | 'Saída'>('Entrada')
  const [description, setDescription] = useState('')

  const handleAddTransfer = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(addTransfer({id: Date.now(), value, type, description}))

    setValue(0)
    setDescription('')
    setType('Entrada')
  }


  return (
    <form onSubmit={handleAddTransfer}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Valor"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            multiline
            rows={4}
          />
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained">Adicionar recomendação</Button>
        </Grid>
      </Grid>
    </form>
  )
}
