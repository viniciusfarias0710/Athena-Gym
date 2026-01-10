# 🔍 Guia: Testando Mobile no Chrome DevTools

## Passo 1: Abrir DevTools
```
Windows/Linux: F12 ou Ctrl + Shift + I
Mac: Cmd + Option + I
```

## Passo 2: Ativar Device Toggle
```
DevTools aberto → Ctrl + Shift + M (Windows/Linux)
ou
Toolbar → Toggle device toolbar icon
```

## Passo 3: Testar Diferentes Devices

### Presets Úteis
| Device | Tamanho | Tipo |
|--------|---------|------|
| iPhone SE | 375px | Mobile |
| iPhone 12 | 390px | Mobile |
| iPhone 14 Pro | 393px | Mobile |
| Pixel 5 | 393px | Mobile |
| Galaxy S21 | 360px | Mobile |
| iPad | 768px | Tablet |
| iPad Pro | 1024px | Tablet |

### Como Selecionar:
1. DevTools → Dimensions ↓ (parte superior)
2. Escolher preset ou custom size
3. Refresh para recarregar

## Passo 4: Testar Recursos

### ✅ Menu Hamburger
- [ ] Aparece em telas < 768px
- [ ] Clica e abre/fecha
- [ ] Links scrollam para seção correta
- [ ] Fecha ao selecionar um link

### ✅ Responsive Layout
- [ ] Hero: 2 colunas → 1 coluna
- [ ] About: conteúdo se reorganiza
- [ ] Plans: 3 cards → 1 por linha
- [ ] Schedule: tabela scroll horizontal
- [ ] Contact: form em 1 coluna

### ✅ Touch Interactions
- [ ] Buttons têm tamanho mínimo 44px
- [ ] Sem cliques acidentais
- [ ] Links têm espaço entre eles
- [ ] Inputs são clicáveis

### ✅ Orientação
- Pressionar Ctrl + Shift + M novamente para rotar
- [ ] Portrait mode funciona
- [ ] Landscape mode funciona
- [ ] Sem horizontal scroll

### ✅ Tipografia
- [ ] Texto legível sem zoom
- [ ] Headings escaladas apropriadamente
- [ ] Inputs com font-size 16px (evita zoom)

## Passo 5: Verificar Console

Abrir Console (F12 → Console) e procurar por:
- ❌ Erros em vermelho (deve estar limpo)
- ❌ Warnings (deve estar limpo)

## Passo 6: Throttling de Rede

Para simular rede lenta:
1. DevTools → Network
2. Throttling dropdown: "Fast 3G" ou "Slow 3G"
3. Testar carregamento da página

## Landscape Testing

### iPhone 12 Landscape (812px)
```
Esperado:
- Menu funciona normalmente
- Cards se reorganizam
- Conteúdo visível sem scroll horizontal
```

### Tablet Landscape (1024px+)
```
Esperado:
- Menu horizontal aparece
- CTA button visível
- Layouts em 2-3 colunas
```

## Troubleshooting

### Menu não abre
- Verificar se `menu-toggle` está visível (< 768px)
- Console: sem erros JavaScript

### Layout quebrado
- Verificar viewport meta tag no HTML
- Refresh DevTools (Ctrl+Shift+R)

### Texto muito pequeno
- Desabilitar zoom do navegador (Ctrl + 0)
- Verificar font-size em DevTools

## Recursos Úteis

### Documentação
- [MDN: Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [Chrome DevTools Mobile](https://developer.chrome.com/docs/devtools/device-mode/)

### Checklist Final
- [ ] Menu hamburger funciona
- [ ] Layout responsivo em todas as seções
- [ ] Sem horizontal scroll
- [ ] Tipografia legível
- [ ] Botões touch-friendly
- [ ] Console limpo
- [ ] Performance satisfatória

---

**Dica Pro:** Use DevTools → Lighthouse para testar Performance, Accessibility, Best Practices e SEO!
