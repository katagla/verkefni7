# Verkefni 7

## Lýsing

Í verkefni 7 ætlum við að útfæra almenna útgáfu af [reiknirit Sesars](https://www.visindavefur.is/svar.php?id=5735) (e. [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)) fyrir íslenskt stafróf. Einnig ætlum við að útbúa „viðmót“ fyrir notanda til að slá inn strengi. Viðmótið er ekki alvöru vefviðmót þar sem tekið verður við inntaki frá notanda með `prompt` og `confirm`.

### Reiknirit Sesars

Upprunalegt reiknirit Sesars hliðrar öllum stöfum stafrófs um þrjá stafi og seinustu þrír stafir verða að fyrstu þrem stöfum stafrófs. Í ASCII verður `A` að `D`, `B` að `E`, `X` að `A` o.s.fr.

Í okkar almennu útgáfu verða allir 32 stafir íslensks stafrófs ásamt því að hliðrun getur verið hvaða stafur sem er á bilinu `[1, 31]` (þar sem hliðrun um `0` eða `32` endar í sama streng.)