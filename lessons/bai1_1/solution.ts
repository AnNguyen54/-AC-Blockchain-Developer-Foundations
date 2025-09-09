import { sha256 } from "js-sha256";

export type Block = {
  index: number;
  timestamp: string;
  transactions: any[];
  previous_hash: string;
  current_hash: string;
};

// ✍️ TODO: Viết hàm tại đây
export function isValidBlock(block: Block): boolean {
  const data = block.index + block.timestamp + JSON.stringify(block.transactions) + 
  block.previous_hash;

  const cvtData = sha256(data);
  
  return cvtData === block.current_hash;
}
