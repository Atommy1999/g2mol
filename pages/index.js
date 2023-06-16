import Head from "next/head";

import Pmol2Ng from "../components/Pmol2Ng";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Double-stranded DNA (dsDNA) Conversion Tool (ng → pmol)</title>
        <meta
          name="description"
          content="質量と塩基対数を入力すると、モル数が自動的に計算されます。モル数はピコモル単位で表示されます。"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div className="container">
          <h1 className="mb-1">2本鎖DNA (dsDNA) 換算ツール (ng → pmol) </h1>
          <p className="text-gray-500">
            Double-stranded DNA (dsDNA) Conversion Tool (ng → pmol)
          </p>

          <Pmol2Ng />
          <h2 className="mb-3">使い方</h2>
          <ol>
            <li>
              <strong>質量入力</strong> <br />
              まず、DNAサンプルの質量をナノグラム単位で入力します。テキストボックスに数値を直接入力するか、上下矢印を使用して数値を調整できます。
            </li>
            <li>
              <strong>塩基対数入力</strong> <br />
              次に、DNAサンプルの1分子あたりの塩基対数を入力します。テキストボックスに数値を直接入力するか、上下矢印を使用して数値を調整できます。
            </li>
            <li>
              <strong>モル数の計算</strong> <br />
              本サイトでは、DNAのモル数は以下の式により計算されます：
              <pre>
                moles of DNA [pmol] = mass [ng] * 10^(-9) / (660 * base pair
                count[bp]) * 10^12
              </pre>
              ここで660は、DNAの塩基対1つあたりの分子量 (平均値)
              を示しています。塩基対数とこの値を掛け合わせることで、DNA分子全体の分子量を求めることができます。その後、DNAの質量をこの分子量で割ることで、DNAのモル数が求まります。
            </li>
            <li>
              <strong>リアルタイム計算</strong> <br />
              質量と塩基対数を入力すると、モル数が自動的に計算されます。モル数はピコモル単位で表示されます。
            </li>
          </ol>
          <h2 className="mb-3">How to Use</h2>
          <ol>
            <li>
              <strong>Mass Input</strong> <br />
              First, enter the mass of your DNA sample in nanograms. You can
              either directly enter a number into the textbox, or adjust the
              value using the up and down arrows.
            </li>
            <li>
              <strong>Base Pair Input</strong> <br />
              Next, enter the number of base pairs per molecule in your DNA
              sample. You can either directly enter a number into the textbox,
              or adjust the value using the up and down arrows.
            </li>
            <li>
              <strong>Molar Calculation</strong> <br />
              On this site, the number of moles of DNA is calculated using the
              following formula:
              <pre>
                moles of DNA [pmol] = mass [ng] * 10^(-9) / (660 * base pair
                count[bp]) * 10^12
              </pre>
              Here, 660 represents the average molecular weight per base pair of
              DNA. By multiplying the number of base pairs by this value, we can
              calculate the total molecular weight of the DNA molecule. The
              number of moles of DNA is then calculated by dividing the mass of
              the DNA by this molecular weight.
            </li>
            <li>
              <strong>Real-time Calculation</strong> <br />
              When you enter the mass and number of base pairs, the number of
              moles is calculated automatically. The number of moles is
              displayed in picomoles.
            </li>
          </ol>

          <h2>Author information</h2>

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
