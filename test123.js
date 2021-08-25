if(gameState==="play") {
  spaceship.x= mouseX
  
  spaceship.collide(edges);
  
 if(space.y<0){
   space.y=space.width/8
 }

  spawnStars();
  spawnAsteroids();

  if(spaceship.isTouching(starG))
  {
    starG.destroyEach();
    score=score+10;
  }
    
  if(spaceship.isTouching(asteroidG))
  {
    gameState="end";
  }
  drawSprites();
  fill("orange")
  text("𝕊ℂ𝕆ℝ𝔼:"+score,170,10);
  }
  
  if(gameState==="end")
    {
      fill("yellow");
      textSize(24);
      text("GAME OVER!",140,200);
    }
