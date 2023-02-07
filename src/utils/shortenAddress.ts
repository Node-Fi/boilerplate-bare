export function shortenAddress(address?: string, len = 5): string {
  return address ? `${address.slice(0, len)}...${address.slice(-3)}` : '...';
}
