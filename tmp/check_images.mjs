import fs from 'fs';
import path from 'path';

const styles = [
  "Minimalist_living_room_202603191156.jpeg",
  "Minimalist_bedroom_Korean_202603191156.jpeg",
  "Minimalist_kitchen_202603191156.jpeg",
  "Minimalist_bathroom_202603191156.jpeg",
  "Scandinavian_living_room_202603191156.jpeg",
  "Scandinavian_bedroom_202603191156.jpeg",
  "Scandinavian_kitchen_202603191156.jpeg",
  "Scandinavian_bathroom_202603191156.jpeg",
  "Industrial_living_room_202603191156.jpeg",
  "Industrial_bedroom_Korean_202603191156.jpeg",
  "Industrial_kitchen_202603191156.jpeg",
  "Industrial_bathroom_202603191156.jpeg",
  "Japandi_living_room_202603191156.jpeg",
  "Japandi_bedroom_202603191156.jpeg",
  "Japandi_kitchen_202603191156.jpeg",
  "Japandi_bathroom_202603191156.jpeg",
  "Modern_luxury_living_202603191156.jpeg",
  "Modern_luxury_bedroom_202603191156.jpeg",
  "Modern_luxury_kitchen_202603191156.jpeg",
  "Modern_luxury_bathroom_202603191156.jpeg",
  "Bohemian_living_room_202603191156.jpeg",
  "Bohemian_bedroom_202603191156.jpeg",
  "Bohemian_kitchen_202603191156.jpeg",
  "Bohemian_bathroom_202603191156.jpeg",
  "Mid-century_modern_living_202603191156.jpeg",
  "Mid-century_modern_bedroom_202603191156.jpeg",
  "Mid-century_modern_kitchen_202603191156.jpeg",
  "Mid-century_modern_bathroom_202603191156.jpeg",
  "Biophilic_living_room_202603191156.jpeg",
  "Biophilic_bedroom_202603191156.jpeg",
  "Biophilic_kitchen_202603191156.jpeg",
  "Biophilic_bathroom_202603191156.jpeg",
  "Cozy_hygge_living_202603191156.jpeg",
  "Cozy_hygge_bedroom_202603191156.jpeg",
  "Cozy_hygge_kitchen_202603191156.jpeg",
  "Cozy_hygge_bathroom_202603191156.jpeg",
  "Neutral_Art_Deco_202603191156.jpeg",
  "Wabi-Sabi_living_room_202603191156.jpeg",
  "Wabi-Sabi_bedroom_202603191156.jpeg",
  "Wabi-Sabi_kitchen_202603191156.jpeg",
  "Wabi-Sabi_bathroom_202603191156.jpeg",
  "Retro_contemporary_living_202603191156.jpeg",
  "Retro_contemporary_bedroom_202603191156.jpeg",
  "Retro_contemporary_kitchen_202603191156.jpeg",
  "Retro_contemporary_bathroom_202603191156.jpeg",
  "Terrazzo_living_room_202603191156.jpeg",
  "Terrazzo_bedroom_202603191156.jpeg",
  "Terrazzo_kitchen_202603191156.jpeg",
  "Terrazzo_bathroom_202603191156.jpeg",
  "Retreat_look_living_202603191156.jpeg",
  "Retreat_style_bedroom_202603191156.jpeg",
  "Retreat_style_kitchen_202603191156.jpeg",
  "Retreat_spa_bathroom_202603191156.jpeg",
  "Color_accent_modern_202603191156.jpeg"
];

const basePath = path.join(process.cwd(), 'public', 'styles', '15종류 인테리어 스타일 이미지');

styles.forEach(file => {
  const fullPath = path.join(basePath, file);
  if (!fs.existsSync(fullPath)) {
    console.log(`MISSING: ${file}`);
  }
});
