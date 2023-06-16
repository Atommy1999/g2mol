import Head from "next/head";

import G2Mol from "../components/G2Mol";

export default function Home() {
  return (
    <div>
      <Head>
        <title>dsDNA 換算(g → mol)</title>
        <meta
          name="description"
          content="質量と塩基対数を入力すると、モル数が自動的に計算されます。モル数はピコモル単位で表示されます。"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div className="container">
          <h1 className="mb-1">2本鎖DNA (dsDNA) 換算ツール (g → mol) </h1>
          <p className="text-gray-500">
            Double-stranded DNA (dsDNA) Conversion Tool (g → mol)
          </p>

          <G2Mol />
          <h2 className="mb-3">使い方</h2>
          <ol>
            <li>
              <strong>質量入力</strong> <br />
              まず、DNAサンプルの質量を入力します。プルダウンメニューから単位を選択することができます。
            </li>
            <li>
              <strong>塩基対数入力</strong> <br />
              次に、DNAサンプルの1分子あたりの塩基対数を入力します。プルダウンメニューから単位を選択することができます。
            </li>
            <li>
              <strong>モル数の計算</strong> <br />
              本サイトでは、DNAのモル数は、例えば、以下の式により計算されます：
              <pre>
                moles of DNA [pmol] = mass [ng] * 10^(-9) / (660 * base pair
                count [bp]) * 10^12
              </pre>
              ここで660は、DNAの塩基対1つあたりの分子量 (平均値)
              を示しています。塩基対数とこの値を掛け合わせることで、DNA分子全体の分子量を求めることができます。その後、DNAの質量をこの分子量で割ることで、DNAのモル数が求まります。
            </li>
            <li>
              <strong>リアルタイム計算</strong> <br />
              質量と塩基対数を入力すると、モル数が自動的に計算されます。プルダウンメニューから単位を選択することができます。
            </li>
          </ol>
          <h2 className="mb-3">How to Use</h2>
          <ol>
            <li>
              <strong>Mass Input</strong> <br />
              First, enter the mass of your DNA sample. You can select the unit
              from the dropdown menu.
            </li>
            <li>
              <strong>Base Pair Input</strong> <br />
              Next, enter the number of base pairs per molecule of your DNA
              sample. You can select the unit from the dropdown menu.
            </li>
            <li>
              <strong>Molar Calculation</strong> <br />
              On this site, the molar quantity of DNA is calculated, for
              example, using the following formula:
              <pre>
                moles of DNA [pmol] = mass [ng] * 10^(-9) / (660 * base pair
                count [bp]) * 10^12
              </pre>
              Here, 660 represents the molecular weight (average value) per base
              pair of DNA. By multiplying the number of base pairs by this
              value, we can obtain the molecular weight of the entire DNA
              molecule. Then, by dividing the mass of the DNA by this molecular
              weight, we can calculate the molar quantity of the DNA.
            </li>
            <li>
              <strong>Real-Time Calculation</strong> <br />
              As you enter the mass and the number of base pairs, the molar
              quantity is automatically calculated. You can select the unit from
              the dropdown menu.
            </li>
          </ol>

          <h2 className="mb-3">Author information</h2>

          <ul>
            <li>
              Website: <a href="https://atommy.me">atommy.me</a>
            </li>
            <li>
              Mail: <a href="mailto:info@atommy.me">info@atommy.me</a>
            </li>
            <li>
              Twitter:{" "}
              <a href="https://twitter.com/atommy_euph">@atommy_euph</a>
            </li>
          </ul>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
