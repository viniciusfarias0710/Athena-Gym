# 🚀 Mobile Deployment Checklist

## Pré-Deployment

### Code Quality
- [ ] Console sem erros
- [ ] Console sem warnings
- [ ] ESLint pass (sem warnings)
- [ ] Sem console.logs em produção

### Mobile Testing
- [ ] Tested em iPhone (Safari)
- [ ] Tested em Android (Chrome)
- [ ] Tested em iPad (landscape)
- [ ] Tested com notch (iPhone X+)

### Responsividade
- [ ] Breakpoint 480px funciona
- [ ] Breakpoint 768px funciona
- [ ] Sem horizontal scroll
- [ ] Sem layout shifts

### Performance
- [ ] Lighthouse score > 80
- [ ] CLS < 0.1
- [ ] LCP < 2.5s
- [ ] FID < 100ms

### Acessibilidade
- [ ] Keyboard navigation funciona
- [ ] Focus states visíveis
- [ ] Alt text em images
- [ ] Color contrast > 4.5:1

---

## Pre-Build

```bash
# 1. Limpar node_modules (opcional)
rm -rf node_modules
npm install

# 2. Run linter
npm run lint

# 3. Build production
npm run build

# 4. Preview build
npm run preview
```

---

## Build Checklist

- [ ] Build completa sem erros
- [ ] Bundle size razoável
- [ ] Sem warnings de dependencies
- [ ] Assets minificados
- [ ] CSS otimizado

---

## Deploy (Vercel/Netlify)

### Vercel
```bash
npm i -g vercel
vercel login
vercel deploy --prod
```

### Netlify
```bash
npm i -g netlify-cli
netlify login
netlify deploy --prod --dir=dist
```

### Environment Variables
- [ ] .env.local configurado
- [ ] Secrets configurados no deploy
- [ ] Build command correto
- [ ] Output directory correto

---

## Post-Deployment

### URLs
- [ ] URL do site funciona
- [ ] HTTPS ativo
- [ ] SSL certificate válido

### Mobile Access
- [ ] Acessar pelo celular
- [ ] Menu hamburger funciona
- [ ] Links internos funcionam
- [ ] Formulário submeta corretamente
- [ ] WhatsApp link funciona

### Performance
- [ ] Google PageSpeed > 80
- [ ] Mobile-friendly test: PASS
- [ ] Web Vitals bom
- [ ] Sem layout shifts

### Analytics
- [ ] Google Analytics configurado
- [ ] Rastreamento de eventos mobile
- [ ] Mobile-specific metrics

---

## Monitoramento Contínuo

### Tools
- [ ] Lighthouse CI configurado
- [ ] Sentry (error tracking) opcional
- [ ] New Relic (performance) opcional
- [ ] Google Search Console

### Métricas para Acompanhar
- [ ] Bounce rate (mobile vs desktop)
- [ ] Session duration (mobile)
- [ ] Conversion rate (mobile)
- [ ] Page load time (mobile)

---

## Bug Fixes Conhecidos

Se encontrar problemas, verificar:

### Menu Hamburger não funciona
```
→ Verificar state do useState
→ Verificar className binding
→ Console: há erros JS?
```

### Layout quebrado em mobile
```
→ F12 > Ctrl+Shift+M
→ Verificar media queries
→ Remover max-width se necessário
```

### Formulário quebrado
```
→ Input font-size é 16px?
→ Verificar labels
→ Testar em real device
```

### Tabela não scrolla
```
→ Verificar overflow-x: auto
→ Testar em Safari iOS
→ Verificar touch-scrolling
```

---

## Versioning

### Versão 1.0 (Atual)
- ✅ Responsivo completo
- ✅ Mobile-first design
- ✅ Touch optimized

### Planejado v1.1
- PWA support
- Offline mode
- Push notifications

### Planejado v2.0
- Backend integration
- User accounts
- Advanced features

---

## Contato & Suporte

Se encontrar issues em production:

1. Coletar informações:
   - Device model
   - Browser
   - OS version
   - Screenshot/video

2. Verificar em DevTools
3. Replicar em staging
4. Criar GitHub issue
5. Fix e re-deploy

---

## Links Úteis

- [Google PageSpeed](https://pagespeed.web.dev/)
- [Responsive Test](https://responsively.app/)
- [GTmetrix](https://gtmetrix.com/)
- [BrowserStack](https://www.browserstack.com/)

---

## Notas Finais

- ✅ Mobile-first design implementado
- ✅ Todos os componentes otimizados
- ✅ Pronto para produção
- ✅ Documentação completa

**O site está pronto para ir ao ar!**

---

**Data:** 5 de janeiro de 2026
**Status:** ✅ READY FOR DEPLOYMENT
