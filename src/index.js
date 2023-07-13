export default function characterHealth(data) {
  let healthValue = '';
  if (data.health > 0 && data.health < 15) {
    healthValue = 'critical';
  } if (data.health > 15 && data.health < 50) {
    healthValue = 'wounded';
  } if (data.health > 50) {
    healthValue = 'healthy';
  }
  return healthValue;
}
