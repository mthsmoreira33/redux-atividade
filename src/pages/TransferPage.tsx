import { Container, Typography } from "@mui/material";
import { useEffect } from "react";

import { TransferForm } from "../components/TransferForm"

import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

export function RecommendationPage() {
  const navigate = useNavigate();

  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    if (!user) {
      alert("Faça login novamente!");

      navigate("/");
      return;
    }
  }, [user, navigate]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Recomendações
      </Typography>

      <TransferForm />
      <RecommendationList />
    </Container>
  );
}
