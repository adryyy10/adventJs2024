/**
 * 
 * Santa Claus 🎅 has received a list of magical numbers representing gifts 🎁, but some of them are 
 * duplicated and must be removed to avoid confusion. Additionally, the gifts must be sorted in ascending 
 * order before being delivered to the elves.
 * 
 * Your task is to write a function that receives a list of integers (which may include duplicates) and
 * returns a new list without duplicates, sorted in ascending order.
 * 
 */
function prepareGifts(gifts) {
  let alreadySeenGifts = [];

  for(let i = 0; i < gifts.length; i++){
    let currentNumber = gifts[i];
    // If already seen, continue
    if (alreadySeenGifts.includes(currentNumber) === true) {
      continue;
    }

    alreadySeenGifts.push(currentNumber);
  }

  let sortedArray = alreadySeenGifts.sort();

  return sortedArray;
}

function prepareGiftsFancyWay(gifts) {
  return [...Set(gifts)].sort();
}

function prepareGiftsFilterWay(gifts) {
  return gifts.filter((gift, index, array) => array.indexOf(gift) === index).sort()
}
