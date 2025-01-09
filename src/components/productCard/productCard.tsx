"use client"
import React from "react";
import * as S from "./styles";
import { Star } from "lucide-react";

// Ajuste na importação do Badge
import { Badge } from "@/components/ui/badge"; // Alterado para importar como default


// Lista de produtos
export const products = [
  {
    id: 1,
    image: "/placeholder.svg?height=200&width=200",
    name: "Máscara N95",
    price: 59.9,
    rating: 5,
    category: "Proteção",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=200&width=200",
    name: "Vitamina C",
    price: 45.9,
    rating: 4,
    category: "Vitaminas",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=200&width=200",
    name: "Álcool em Gel",
    price: 15.9,
    rating: 5,
    category: "Higiene",
  },
  {
    id: 4,
    image: "/placeholder.svg?height=200&width=200",
    name: "Termômetro Digital",
    price: 89.9,
    rating: 4,
    category: "Equipamentos",
  },
  {
    id: 5,
    image: "/placeholder.svg?height=200&width=200",
    name: "Luvas Descartáveis",
    price: 29.9,
    rating: 4,
    category: "Proteção",
  },
  {
    id: 6,
    image: "/placeholder.svg?height=200&width=200",
    name: "Protetor Facial",
    price: 49.9,
    rating: 5,
    category: "Proteção",
  },
  {
    id: 7,
    image: "/placeholder.svg?height=200&width=200",
    name: "Oxímetro",
    price: 199.9,
    rating: 5,
    category: "Equipamentos",
  },
  {
    id: 8,
    image: "/placeholder.svg?height=200&width=200",
    name: "Bandagem",
    price: 12.9,
    rating: 4,
    category: "Primeiros Socorros",
  },
  {
    id: 9,
    image: "/placeholder.svg?height=200&width=200",
    name: "Vitamina D",
    price: 39.9,
    rating: 5,
    category: "Vitaminas",
  },
  {
    id: 10,
    image: "/placeholder.svg?height=200&width=200",
    name: "Seringa",
    price: 2.9,
    rating: 4,
    category: "Equipamentos",
  },
];

// Definição das props do componente ProductCard
interface ProductCardProps {
  id: number;
  image: string;
  name: string;
  price: number;
  rating: number;
  category: string;
  isInCart: boolean;
  onAddToCart: () => void;
  onRemoveFromCart: () => void;
}

// Componente ProductCard
const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
  rating,
  category,
  isInCart,
  onAddToCart,
  onRemoveFromCart,
}) => {
  return (
    <S.Container>
      <S.ImageWrapper>
        <S.Image src={image} alt={name} />
        {/* Uso do Badge para exibir a categoria */}
        <Badge>{category}</Badge>
      </S.ImageWrapper>
      <S.Content>
        <S.Name>{name}</S.Name>
        <S.Rating>
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={16}
              fill={index < rating ? "#ffc107" : "none"}
              color={index < rating ? "#ffc107" : "#ddd"}
            />
          ))}
          <S.RatingText>({rating}/5)</S.RatingText>
        </S.Rating>
        <S.Price>R$ {price.toFixed(2)}</S.Price>
        {isInCart ? (
          <S.CancelButton onClick={onRemoveFromCart}>
            Remover do Carrinho
          </S.CancelButton>
        ) : (
          <S.AddButton onClick={onAddToCart}>
            Adicionar ao Carrinho
          </S.AddButton>
        )}
      </S.Content>
    </S.Container>
  );
};

export default ProductCard;
