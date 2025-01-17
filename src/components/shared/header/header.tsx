"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from 'next/link';
import {
  HeaderContainer,
  TopBanner,
  MainHeader,
  Logo,
  LogoText,
  SearchContainer,
  SearchInput,
  SearchButton,
  ActionsContainer,
  ActionButton,
  CartCount,
  CartDropdown,
  OpenHours,
  FreeShippingMessage,
  PillIcon,
  GlowingDot,
  MobileMenuButton,
  MobileMenu,
  MobileMenuItem,
} from "./styles";
import { Search, MapPin, ShoppingCart, Clock, Truck, PhoneIcon as WhatsAppIcon, Menu, X } from 'lucide-react';
import { useCart } from "@/components/contexts/cartContext";
import Cart from "@/components/cart/cart";
import SearchResults from "@/components/searchResults/searchResults";
import { products } from "@/components/productCard/productCard";

export default function Header() {
  const { cart } = useCart();
  const [showCart, setShowCart] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    const results = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
    setShowSearchResults(searchTerm.length > 0);
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <HeaderContainer>
      <TopBanner>
        <OpenHours>
          <Clock size={16} />
          Farmácia aberta 24 horas
          <GlowingDot />
        </OpenHours>
        <FreeShippingMessage>
          Frete grátis a partir de R$ 20,00
        </FreeShippingMessage>
      </TopBanner>

      <MainHeader>
        <Logo>
          <PillIcon />
          <LogoText>MedikPharm</LogoText>
        </Logo>

        <SearchContainer ref={searchRef}>
          <SearchInput
            type="text"
            placeholder="Encontre o medicamento ideal para você"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setShowSearchResults(true)}
          />
          <SearchButton>
            <Search size={20} />
          </SearchButton>
          {showSearchResults && <SearchResults products={filteredProducts} />}
        </SearchContainer>

        <ActionsContainer>
          <Link href="/track-order" passHref>
            <ActionButton as="a">
              <Truck size={20} />
              <span>Acompanhar Pedido</span>
            </ActionButton>
          </Link>

          <ActionButton 
            as="a" 
            href="https://www.google.com/maps/dir/?api=1&destination=Av.+Paulista,+1000+-+Bela+Vista,+São+Paulo+-+SP,+01310-100&travelmode=driving" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <MapPin size={20} />
            <span>Localização</span>
          </ActionButton>

          <ActionButton
            as="a"
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={20} />
            <span>Fale Conosco pelo WhatsApp</span>
          </ActionButton>

          <ActionButton onClick={toggleCart}>
            <ShoppingCart size={20} />
            <span>Carrinho</span>
            {totalItems > 0 && <CartCount>{totalItems}</CartCount>}
          </ActionButton>
        </ActionsContainer>

        <MobileMenuButton onClick={toggleMobileMenu}>
          {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
        </MobileMenuButton>
      </MainHeader>

      <MobileMenu $show={showMobileMenu}>
      <MobileMenuItem href="/track-order" style={{ textDecoration: 'none' }}>
  <Truck size={20} />
  Acompanhar Pedido
</MobileMenuItem>
        <MobileMenuItem 
          href="https://www.google.com/maps/dir/?api=1&destination=Av.+Paulista,+1000+-+Bela+Vista,+São+Paulo+-+SP,+01310-100&travelmode=driving" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <MapPin size={20} />
          Localização
        </MobileMenuItem>
        <MobileMenuItem
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon size={20} />
          Fale Conosco pelo WhatsApp
        </MobileMenuItem>
        <MobileMenuItem as="button" onClick={toggleCart}>
          <ShoppingCart size={20} />
          Carrinho
          {totalItems > 0 && <CartCount>{totalItems}</CartCount>}
        </MobileMenuItem>
      </MobileMenu>

      {showCart && (
        <CartDropdown>
          <Cart onClose={toggleCart} />
        </CartDropdown>
      )}
    </HeaderContainer>
  );
}

