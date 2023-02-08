import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(){
    return `<!DOCTYPE html>
    <html>
    <head>
    <title> Welcome to Talent Dev Phone Store</title>
    <style> 
    body {
      background-image: url("https://img-new.cgtrader.com/items/2360995/aea0e48b3c/mobile-shop-3d-model-design-3d-model-animated-rigged-max-obj-3ds-fbx-c4d-dxf.jpg");
      background-color: #rrrrrr;
    }
    </style>
    </head>
    
    <h1 style="font-size: 3rem; color: #212E52"><a href="http://localhost:3000/"><img src="https://talentdev.tech/wp-content/uploads/2022/10/cropped-TalentDev_logo_002__1_-removebg-preview.png" width="200px"> </a></h1>
    <body>
    <h2 style="font-size: 2rem; color: #008AD8"><strong>Apple</strong></h2>

    <ul style =" font-size: 2rem; color:#F2E9EA">
      <li><center>Apple Iphone</center>
     <center> <img src="https://www.apple.com/v/iphone-14-pro/c/images/overview/design/design_startframe__f5z6xj9zkgmu_large.jpg" width="200px"></center></li> ><br></br>
      <li><center>Apple Watch</center>
      <center><img src="https://www.apple.com/v/apple-watch-series-8/b/images/overview/hero/hero_static__c9d1bk9frtua_large.jpg" width="400px"></center></li><br></br>
      <li><center>Apple Home Pod</center>
      <center><img src="https://www.apple.com/v/homepod-2nd-generation/a/images/overview/hero_homepod__f002zouobzyy_large.jpg" width="400px"></center></li><br></br>
      <li><center>Apple Macbook</center>
      <center><img src="https://www.apple.com/v/macbook-pro-14-and-16/d/images/overview/performance/screen_processing__f36dk3ge7wey_large.jpg" width="400px"></center></li>
    </ul>
    
    
    <h2 style="font-size: 2rem; color: #008AD8"><strong>Samsung</strong></h2>

    <ul style =" font-size: 1rem; color:#F2E9EA">
      <li>Galaxy Flip<br></br>
      <img src="https://cdn.vox-cdn.com/thumbor/X8qgnRigWVYyVimnI6ZVTtOU1F8=/0x0:2040x1360/1400x1400/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/19736261/vpavic_190731_z_flip_0247_1.jpg" width="60px"></li>
      <li>Galaxy Fold<br></br>
      <img src="https://content.codecademy.com/programs/code-foundations-path/diamond.png" width="60px"></li>
      <li>Galaxay Tablet<br></br>
      <img src="https://content.codecademy.com/programs/code-foundations-path/diamond.png" width="60px"></li>
      <li>Galaxy S series<br></br>
      <img src="https://content.codecademy.com/programs/code-foundations-path/diamond.png" width="60px"></li>
    </ul>

    
    <h2 style="font-size: 2rem; color: #008AD8"><strong>Tecno</strong></h2>

    <ul style =" font-size: 1rem; color:#F2E9EA">
      <li>Spark<br></br>
      <img src="https://content.codecademy.com/programs/code-foundations-path/diamond.png" width="60px"></li>
      <li>Phantom<br></br>
      <img src="https://content.codecademy.com/programs/code-foundations-path/diamond.png" width="60px"></li>
      <li>Pop<br></br>
      <img src="https://content.codecademy.com/programs/code-foundations-path/diamond.png" width="60px"></li>
    </ul>
   
  </div>
</body>


    
    </html>
     `
  }


}
