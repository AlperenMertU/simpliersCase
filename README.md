# Case Study - Login Formu ile Kullanıcı Dostu Chat Ekranı

## Kullanılan Diller ve Araçlar

<p align="center">
<a><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="Javascript" /></a>
<a ><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a>
<a><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg" width="36" height="36" alt="Sass" /></a>
<a><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg" width="36" height="36" alt="Figma" /></a>
<a><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg" width="36" height="36" alt="Redux" /></a>
</p>
<p align="center">
    -React Router
    -Material UI
</p>

## Proje Hakkında

<p align="left">
  Hazırladığım projede hiçbir hazır template veya tasarım amaçlı kütüphane kullanılmadan tamamen farklı ve özgün konseptle hem webe hem mobile uygun bir 
  şekilde tasarlanmıştır. Responsive bir tasarım için Scss tarafında "Css Grid" kullandım ve tasarıma bunu üzeridnen gittim. Genel olarak 2 farklı sayfadan oluşturğu için "LoginScreen.js" ve "ChatScreen.js",
  Daha kolay veri iletimi için Redux Toolkit kullandım.
 </p>

### Componentler
<img src="https://github.com/AlperenMertU/simpliersCase/assets/89020497/f745e321-572a-4426-ab89-91cf5d389d7b" alt="components" width="200" />

<p align="left">
 Ekranı kapsayan bileşenlerim "components" dizininin altında daha küçük işlevli bileşenler 
 "minComponent" içinde. "redux" dizini içersinde ReduxTool kit elemanı var.
</p>
<hr>
<h3>Üstten alta doğru</h2>
<p align="left">
 <b>ChatList.js</b> ; bu bileşen aslında sidebar yerine de geçiyor çünkü mesaj uygulamamızın yan tarafında diğer mesajlaştığımız kimeseleri görmemizi sağlıyor. İçersinde örnek olması açısından dizi içinde 3 kişi ekldim 
</p>
<p align="left">
 <b>FriendsMessage.js</b> ; bu bileşen hem karşıdan hem bizden gelen 4 mesajlık dummy mesajları içeriyor. Benim dummy mesajlarım da bunu içinde. 
</p>
<p align="left">
 <b>MyMessages.js</b> ; bu bilşen inputumuzdan gelen texti işleyim mesaj balonu şekline sokuyor. Ve kendi mesajmız gönderilmeye hazır hale getiriyor
</p>
<p align="left">
 <b>UserProfile.js</b> ; bu bilşen aslında navbar yerine de geçiyor. bize Loginde girilien kullanıcımız bilgilerini gösteriyor.
</p>
<p align="left">
 <b>UserSlice.js</b> ; bu bilşen Redux ile kullanılan actionları içeriyor. Bir başka komponentten "kullanıcı adı" ve "ChatList.js" deki kullanıcı verilerini almak istersem bunu kullanıyorum.
</p>
<p align="left">
 <b>store.js</b> ; bu bilşen Redux ile kullanılan UserSlice.js reducerını kullanmamı sağlıyor.
</p>
<p align="left">
 <b>ChatSCreen.js</b> ; genel olarak chat penceresini ve içersindeki komponentleri kapsayan bileşenimiz. css grid kullanarak tasrımı yapıldı. İnput direkt olarak bu bileşenin içersinde.
</p>
<p align="left">
 <b>LoginScreen.js</b> ; React Router ile Ekran geçişini sağlar. Ad Soyad Bilgilerini alır. Redux ile UserProfile.js, MyMessages.js ve FriendsMessage.js sadece Ad verisini iletir
</p>
<p align="left">
 <b>MessagesSection.js</b> ; Kullanıcıdan gelen mesajı "MyMessages.js" e prop geçip ekrana yansıtır. "FriendsMessage.js" içersindeki 4 adetlik dummy mesaj da bunun içersinde ekranda gösterilir
</p>

### Görseller 
<hr>

#### LoginScreen
<img src="https://github.com/AlperenMertU/simpliersCase/assets/89020497/dacf9eaf-2eef-461c-920a-d08a931c0e04" alt="loginscreen" width="300" />

#### ChatScreen
<img src="https://github.com/AlperenMertU/simpliersCase/assets/89020497/ac700a29-c4d6-4103-8785-8e33491aaf0f" alt="chatscreen" width="300" />

#### Mobile Login
<img src="https://github.com/AlperenMertU/simpliersCase/assets/89020497/dfe45af2-173d-4f8a-8d7b-de7ea3c01c37" alt="mobilelogin" width="200" />

#### Mobile Chat
<img src="https://github.com/AlperenMertU/simpliersCase/assets/89020497/eb30433a-4dc9-4af2-8920-c71c9c4fa1f6" alt="mobileChat" width="200" />

