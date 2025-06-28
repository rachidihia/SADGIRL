export default function SadgirlPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 text-gray-800 p-6">
      <header className="text-center py-10">
        
<h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-pink-600 to-purple-500 animate-pulse">
  SADGIRL
</h1>

        <img src="/sadgirl.webp" alt="SADGIRL Mascot" className="w-40 mx-auto mt-4 rounded-xl shadow-lg" />
        <p className="text-xl mt-4 max-w-2xl mx-auto">
          The meme coin with a mission — spreading love and laughter while supporting children in need.
        </p>
        <a
          href="https://pump.fun/" 
          target="_blank"
          className="mt-6 inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-110"
        >
          Buy on Pump.fun
        </a>
      </header>

      <section className="max-w-4xl mx-auto mt-16 grid gap-12">
        <div className="bg-white p-6 rounded-2xl shadow-md transition-transform duration-700 ease-in-out hover:scale-105">
          <h2 className="text-3xl font-bold text-pink-500 mb-4">About SADGIRL</h2>
          <p>
            SADGIRL is a community-driven meme coin built on Solana. Unlike other meme tokens, our goal isn't just laughs — it's change. 50% of all funds raised will be donated to children's charities around the world. Join the movement that combines crypto, comedy, and care.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md transition-transform duration-700 ease-in-out hover:scale-105">
          <h2 className="text-3xl font-bold text-pink-500 mb-4">Tokenomics</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Total Supply:</strong> 1,000,000,000 SADGIRL</li>
            <li><strong>Charity Wallet:</strong> 50%</li>
            <li><strong>Liquidity & Listings:</strong> 30%</li>
            <li><strong>Community Rewards:</strong> 20%</li>
            <li><strong>Team Allocation:</strong> 0% — 100% community-owned!</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md transition-transform duration-700 ease-in-out hover:scale-105">
          <h2 className="text-3xl font-bold text-pink-500 mb-4">Fake Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <img src="https://api.dicebear.com/7.x/fun-emoji/svg?seed=Lucy" className="w-24 h-24 mx-auto rounded-full" alt="Lucy" />
              <h3 className="text-lg font-semibold mt-2">Lucy HODL</h3>
              <p className="text-sm text-gray-500">Chief Meme Officer</p>
            </div>
            <div className="text-center">
              <img src="https://api.dicebear.com/7.x/fun-emoji/svg?seed=Max" className="w-24 h-24 mx-auto rounded-full" alt="Max" />
              <h3 className="text-lg font-semibold mt-2">Max Moon</h3>
              <p className="text-sm text-gray-500">Solana Sorcerer</p>
            </div>
            <div className="text-center">
              <img src="https://api.dicebear.com/7.x/fun-emoji/svg?seed=Neko" className="w-24 h-24 mx-auto rounded-full" alt="Neko" />
              <h3 className="text-lg font-semibold mt-2">Neko Drop</h3>
              <p className="text-sm text-gray-500">Charity Strategist</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md transition-transform duration-700 ease-in-out hover:scale-105">
          <h2 className="text-3xl font-bold text-pink-500 mb-4">Roadmap</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Launch on Pump.fun</li>
            <li>1st Charity Donation</li>
            <li>DEX Listings & Airdrops</li>
            <li>Community NFT Collection</li>
            <li>Charity Partnership Expansion</li>
          </ol>
        </div>

        <footer className="text-center text-sm text-gray-600 pt-10">
          Made with ❤️ by the SADGIRL community. Not financial advice.
        </footer>
      </section>
    </div>
  );
}