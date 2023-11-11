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
<img src="https://github.com/AlperenMertU/simpliersCase/assets/89020497/07b986fe-a600-49e3-bc05-e4bb6899a5d2" alt="loginscreen" width="300" />

#### ChatScreen
<img src="https://github.com/AlperenMertU/simpliersCase/assets/89020497/319761c6-7736-47da-89ad-9fbce9df3917" alt="chatscreen" width="300" />

#### Mobile Login
<img src="https://github.com/AlperenMertU/simpliersCase/assets/89020497/eb9259fb-ddcb-425f-883a-2398f779aa67" alt="mobilelogin" width="200" />

#### Mobile Chat
<img src="https://github.com/AlperenMertU/simpliersCase/assets/89020497/ce4791a0-f5c6-4a5f-886d-22f85e991a4d" alt="mobileChat" width="200" />

