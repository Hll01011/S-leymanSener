# 🐔 Kümes Otomasyon Web Sitesi

Profesyonel kümes otomasyon ve havalandırma sistemleri sunmak için tasarlanmış, tamamen responsive web sitesi.

---

## 📋 İçerik

✅ **5 Sayfa Hazır:**
- ✓ Ana Sayfa (index.html)
- ✓ Hizmetler (hizmetler.html)
- ✓ Referanslar (referanslar.html)
- ✓ Hakkımda (hakkimda.html)
- ✓ İletişim (iletisim.html)

✅ **Özellikler:**
- 📱 Mobil Responsive (Telefon, Tablet, Desktop)
- ⚡ Hızlı Yükleme (CSS/JS inline, optimize edilmiş)
- 🎯 SEO Friendly (Meta tags, başlıklar)
- 🔗 WhatsApp Entegrasyonu
- 📧 İletişim Formu
- 🎨 Profesyonel Lacivert Tema

---

## 🚀 Nasıl Kullanılır?

### 1. GitHub'a Yükle

```bash
# 1. Yeni bir repository oluştur (ismini seç: kumağ-website)
# 2. Tüm HTML dosyalarını upload et
# 3. GitHub Pages aktif et (Settings → Pages → main branch)
```

### 2. Önemli Düzenlemeler

**Telefon Numaranızı Güncelle:**

Bütün HTML dosyalarında şu yerleri değiştir:
```
+905xxxxxxxxx → Senin gerçek telefon numarası
suleyman@example.com → Senin email adresin
```

**Aranacak Yerler:**
- `index.html` - 2 yer (hero buttons)
- `hizmetler.html` - 1 yer (WhatsApp button)
- `referanslar.html` - 1 yer (WhatsApp button)
- `hakkimda.html` - 1 yer (WhatsApp button)
- `iletisim.html` - 4 yer (contact info + form)

**Kolay Yöntem:** VS Code'da "Find and Replace" kullan (Ctrl+H):
- Bul: `+905xxxxxxxxx`
- Değiştir: `+90 5XX XXX XXXX` (senin numarası)

---

## 🎨 Tasarım Kustomizasyonu

### Renkler Değiştirmek

CSS'de `:root` bölümü:
```css
:root {
    --primary: #1a3a52;      /* Koyu Lacivert */
    --secondary: #2c5aa0;    /* Açık Lacivert */
    --accent: #ff9500;       /* Turuncu Accent */
    --light: #f5f7fa;        /* Açık Gri */
    --text: #333;            /* Koyu Metin */
}
```

**Renk Önerileri:**
- Yeşil tema: `--primary: #1b4332`
- Kırmızı tema: `--primary: #8b0000`
- Mavi tema: `--primary: #003366`

### Logo Değiştirmek

Her sayfada:
```html
<div class="logo">⚙️ KUMAĞ.COM</div>
```

İstediğin şekilde düzenle:
```html
<div class="logo">⚙️ Şener Otomasyon</div>
```

---

## 📱 Mobil Test

1. **Chrome DevTools** açarak (F12) mobil modda test et
2. **ResponsiveDesignChecker.com** kullanabilirsin
3. Gerçek telefonla açıp kontrol et

---

## 🔍 SEO İyileştirmeleri

Siteni Google'da çıkartmak için:

### 1. Google Search Console
- google.com/webmasters
- Sitenizi ekle
- Sitemap gönder (isteğe bağlı)

### 2. Meta Descriptions
Her sayfa için yazılmıştır. Düzenleme gerekirse:
```html
<meta name="description" content="Senin açıklaman burada">
```

### 3. Anahtar Kelimeler (Zaten İçerisinde)
- kümes otomasyon
- fan kontrol sistemi
- havalandırma sistemi
- PLC otomasyon
- tavuk kümesi
- Eskişehir, Bilecik, Kütahya

---

## 💡 İletişim Formu Kurulumu

**UYARI:** Mevcut formda WhatsApp'a yönlendirme kullanılmaktadır.

Gerçek email sistemi için:
1. **FormSubmit.co** kullan (ücretsiz)
2. Veya **Netlify Forms** (ücretsiz)
3. Veya **Google Forms** entegrasyonu

---

## 🚀 Domain Alma

Siteni internete çıkartmak için:

### 1. Domain Satın Al
- **Hosting.com.tr** - Türk hosting
- **GoDaddy.com** - Uluslararası
- **Namecheap.com** - Ucuz
- Tavsiye: `suleymanşener.com` veya `kumasotomasyonu.com`

### 2. GitHub Pages'i Bağla
```
Domain DNS ayarlarında:
- @ → GitHub Pages IP adresi
- www → GitHub Pages IP adresi
```

**Ayrıntılı rehber:** docs.github.com/en/pages/configuring-a-custom-domain

---

## 📊 Google Analytics Ekle

(Opsiyonel) Ziyaretçi takibi için:

1. google.com/analytics
2. Account oluştur
3. Tracking Code'u `<head>` içine ekle

---

## ✅ Başlatma Kontrol Listesi

- [ ] 5 HTML dosyası GitHub'a yükledim
- [ ] Tüm telefon numaralarını güncelledim
- [ ] Tüm email adreslerini güncelledim
- [ ] GitHub Pages aktif ettim
- [ ] Site açılıyor ve mobilde uyumlu
- [ ] WhatsApp butonları çalışıyor
- [ ] Google Search Console'a ekledim
- [ ] İletişim formu test ettim

---

## 🎯 Marketing İpuçları

1. **WhatsApp Mesajı Pin Yap** - Sabitlenmiş mesaj koy
2. **Meta/Instagram'da Paylaş** - Sitenin linkini
3. **Google My Business** - Harita ve bilgiler
4. **Yerel Reklamcılık** - Google Ads, Facebook Ads
5. **Müşteri Referansı** - Referanslar sayfasına ekle

---

## 🛠️ Sorun Çözme

### Site açılmıyor?
- GitHub Pages settings kontrol et
- Dosya isimlerinin doğru olduğundan emin ol

### WhatsApp linki çalışmıyor?
- Telefon numarasını kontrol et
- +90 ile başlıyor mu?

### Formda sorun?
- Browser console kontrol et (F12)
- Telefon numarasını tam kontrol et

---

## 📞 İletişim & Destek

**Sorular için:**
- 📧 Email: suleyman@example.com
- 💬 WhatsApp: +90 5XX XXX XXXX
- 🌐 GitHub: GitHub profile linkin

---

## 📜 Lisans

Bu site template'i serbestçe kullanabilirsin.

---

## 🎉 Başarılar!

Siteniz açık, profesyonel ve müşteri çekmeye hazır! 

**Sonraki Adımlar:**
1. Domain al
2. Gerçek fotoğrafları ekle
3. Google Analytics kur
4. Sosyal medyada tanıt

Başarılar dilerim! 🚀