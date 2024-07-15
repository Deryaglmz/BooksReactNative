
# Books App

Proje, kitapların listesini ve detaylarını gösteren bir React Native uygulamasıdır.

## Kurulum

1. Depoyu klonlayın:
   ```sh
   git clone https://github.com/kullanici-adi/kitap-uygulamasi.git
   ```
2. Proje dizinine gidin:
   ```sh
   cd kitap-uygulamasi
   ```
3. Bağımlılıkları yükleyin:
   ```sh
   npm install
   ```

## Uygulamayı Çalıştırma

Uygulamayı bir Android veya iOS simülatörü/emülatöründe çalıştırmak için:

1. Metro bundler'ı başlatın:
   ```sh
   npx react-native start
   ```
2. Yeni bir terminal penceresi açın ve çalıştırın:
   ```sh
   npx react-native run-android
   ```
   veya
   ```sh
   npx react-native run-ios
   ```

## Proje Yapısı

- `App.js`: Uygulamanın ana giriş noktası. Navigasyon konteynerını ve yığın navigatörünü ayarlar.
- `BookList`: bileşenini kullanarak kitapların listesini gösterir.
- `BookDetailScreen`: Seçilen bir kitabın detaylarını gösterir.
- `BookList`: Kitap listesini render eden bir bileşen.
- `book.json`: Kitapların ve yazarlarının listesini içerir.

## Navigasyon

Uygulama, ekranlar arasında gezinmek için React Navigation kullanır. Rotaları tanımlamak için `Stack.Navigator` kullanılır:

- `Book`: Kitapların listesini gösterir.
- `BookDetail`: Seçilen bir kitabın detaylarını gösterir.

## Kitap Verileri

Kitap verileri, kök dizinde bulunan `book.json` dosyasında saklanır. Veri formatı şu şekildedir:

```json
[
  {"title": "Harry Potter", "author": "J.K Rowling"},
  {"title": "Lord of the Rings", "author": "J.R.R. Tolkien"},
  {"title": "Le Petit Prince", "author": "Antoine de Saint-Exupery"},
  {"title": "Fairy tales", "author": "Hans Christian Andersen"},
  {"title": "The Divine Comedy", "author": "Dante Alighieri"},
  {"title": "Pride and Prejudice", "author": "Jane Austen"},
  {"title": "Les Miserables", "author": "Victor Hugo"}
]
```


https://github.com/user-attachments/assets/1412e2ed-b39c-465c-80a5-97b8b3aa8be7

