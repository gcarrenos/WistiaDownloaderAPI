var https = require('https');
var lodash = require('lodash');
var fs = require('fs');
var http = require('http');

var hola = ['4p0nk37cwm' ,'4q9g4imefl' ,'4rm08u1k6p' ,'4tf3nmda9l' ,'4uqlpd6e5v' ,'4usl632xf8' ,'4w393qkdqq' ,'4wfmuukxpn' ,'4xq5r8rbdc' ,'4y5ublhkb1' ,'4zklhvnq30' ,'513fxlt0sr' ,'52ftvbxl3n' ,'539q2b3lss' ,'56o4f15orb' ,'5774cns43a' ,'582a4bynju' ,'58a80sqibj' ,'59ydksj0yy' ,'5b8t49p7k2' ,'5iw1gp6qo0' ,'5joumeutzh' ,'5kdd28guwg' ,'5lqwh8ks1c' ,'5lx9r44odg' ,'5p3e4s3e4f' ,'5razydw0rt' ,'5rd62q1txa' ,'5rh5mqsob3' ,'5sgipv93tg' ,'5tuqaecx12' ,'5uvbvnoopl' ,'5xz1egsq6m' ,'60ngb8gbqa' ,'60sdbbheps' ,'64l7edgj6y' ,'65vbwm5cz2' ,'6a9euukknu' ,'6bcthjnde0' ,'6d11xvc0eo' ,'6eq0mfi2sq' ,'6fvqgmmzmp' ,'6ggikhwsgh' ,'6i8r6qi5bx' ,'6j4s24ys4f' ,'6mnmcs9db0' ,'6q8hn03k4d' ,'6sz4ujugxf' ,'6t4dlyc30d' ,'6tq3pw2gbu' ,'6x4w420jt7' ,'6yjemxolgx' ,'6yko04d25u' ,'6yw6rfksnp' ,'7031mazbdn' ,'7057351v61' ,'72gydli0ra' ,'749ccdu1m3' ,'749njxs6fw' ,'789ynqdhgd' ,'79kf8cg967' ,'79orbmah09' ,'7av9gedjxx' ,'7batxqzm6r' ,'7e0jzpy2pf' ,'7m7f3i55vb' ,'7ob0kxg7or' ,'7r1l240i3n' ,'7rvrme0yt1' ,'7t2902tyuu' ,'7uaahmpxw9' ,'7zjleyjgqk' ,'80y6wo32tb' ,'85mbfks7jt' ,'86vo70ka2t' ,'8889wp7qfw' ,'89cg6xkfv1' ,'8ccqkme0tk' ,'8cdmkraidi' ,'8e4w4lz3mu' ,'8fdpue1se3' ,'8g87jqadc1' ,'8hk3cuzner' ,'8klf8ptos0' ,'8kzhlrzm16' ,'8op1psll07' ,'8qyzw1mvg0' ,'8sfl349p3y' ,'8uidvfw7f6' ,'8yyit6zmwa' ,'903jbgxe02' ,'90pfdzaamn' ,'97b1l0eqhg' ,'988f6y0tll' ,'9cfqez1i8o' ,'9ey53t6ze3' ,'9i5m4ytxlr' ,'9lkr6yfphs' ,'9m50uopln1' ,'9pvaxq1tgm' ,'9u6aosrecy' ,'9x4m0m328n' ,'9y003dglj4' ,'9zqmh173wz' ,'a0hl51qo3v' ,'a13fsviirn' ,'a26ra9s2ua' ,'a4qkt958ji' ,'a7632qroux' ,'a7wyh1zug9' ,'ac9yjq82gd' ,'af7hmw5a5o' ,'afdef5m8n4' ,'akhrphljwa' ,'akljhrn8nz' ,'alc8gitd4a' ,'apfo15dcsp' ,'ar2vigkc30' ,'ax7hfgx6lj' ,'b0boognlo3' ,'b105jt5l88' ,'b2dxt14kum' ,'b3e0yee3q6' ,'b4k4blgiju' ,'b5p8hk52vc' ,'b7lqjncf2p' ,'b7whmjamet' ,'b8kg12j914' ,'be92rc2arw' ,'bec0i8nap4' ,'bgydbwwm08' ,'biarw41wmn' ,'bikma8ayeu' ,'bip6am89ks' ,'bj9rze6hak' ,'bjdddxxa4a' ,'bktawqysrh' ,'blnxzustrd' ,'blwxlgfae0' ,'bo1m7sr6qi' ,'bsxz1ppyn1' ,'bv2edrexjz' ,'bw1sy3u47r' ,'bwqmzh5wpc' ,'bywdi5vzou' ,'c28pu5ojk3' ,'c3g2ysxnf6' ,'c6xcu917v5' ,'c7kqeu2rfx' ,'c8zussaz9n' ,'c95217blwr' ,'cbve7pieqg' ,'ccfbndy2i1' ,'cer6fsk00u' ,'ch190homs2' ,'chnqt4mc1y' ,'cikhhhlkze' ,'cnlwugkqaq' ,'cnpaqbhq2g' ,'coa8nra7fh' ,'cphzscoak9' ,'cs3ymxt8ir' ,'cvjtam6n2p' ,'cvqjthkzgl' ,'d0fz4lx9wo' ,'d2gj6eo6h6' ,'d4bdeo60kx' ,'d4crehhib3' ,'d5ijl8y6uf' ,'d5iwkyhscq' ,'d6qtdlpivq' ,'d802ucksuc' ,'dc1v1offpa' ,'de4l8uzw1f' ,'dfwtn9fbib' ,'diybhghwkx' ,'dmbldoljye' ,'dn4ki8d24l' ,'dnw6zf9beo' ,'do26ri7vha' ,'dodkz34nsy' ,'dtky206afw' ,'dus07cppsz' ,'duxrp1r8ik' ,'dz8infnn5b' ,'e0ha93wpn8' ,'e0rk1ltqqd' ,'e1ee66v5wb' ,'e212ga1etl' ,'e2mivbi1ax' ,'e4e3y9759y' ,'e4vw22blnv' ,'e5pi7us65l' ,'e656a7m212' ,'e69lubjtd4' ,'e7tswbrh3e' ,'e834pkgxjo' ,'ee10g43j56' ,'ejb2hkfq73' ,'ek1hchbdtj' ,'emj3109iq6' ,'env6815qnm' ,'eqj1a8r2ia' ,'er2eeidzh9' ,'erp1jxzxyg' ,'ety1t2kasb' ,'evhvrso619' ,'ezgm3no7aw' ,'f3gaon25ra' ,'f43oht6u6m' ,'f68wcpu0bi' ,'f7u9nqywom' ,'f9cn40zlhd' ,'f9x0gj0dpn' ,'f9xl0exrm8' ,'fbnfaaum8i' ,'fc484j6k46' ,'fcccywgdmu' ,'ffozzd710x' ,'fg2ox7p4jm' ,'fgzufc64e9' ,'fj5ywn44wd' ,'fkhd94ecws' ,'fmgyh8pl16' ,'fn1gmy5om0' ,'fn9njdc291' ,'fp25w5tznr' ,'fqa9f4u1sd' ,'fqduybqzcv' ,'frltvg7qc5' ,'fv0zqbub9j' ,'fy14oifjpt' ,'fzoj279jpq' ,'g1ofpuq10i' ,'g25ebxmydk' ,'g4em47m5vw' ,'g5kzqcazzp' ,'g6txqct07p' ,'g8pjfuof0q' ,'g92n4n725m' ,'g9mmke3k1v' ,'gcemq56fek' ,'giowmtjvuz' ,'gjjbspt0v0' ,'gjr4oczldu' ,'gl3otcs5op' ,'gp9h4uqs4y' ,'gtu5lgm2du' ,'gtvclqaz6j' ,'gvu5g9z3hi' ,'gwzwps3bk9' ,'gx4cz54hlz' ,'gz5hf95tzt' ,'h0hgcwqq4e' ,'h55a8xv70i' ,'h5qjnttah1' ,'h5zeqkayta' ,'h8dzdzdvbh' ,'h8iiecdyah' ,'h9rokg2p5a' ,'hd4rogscvq' ,'he8h4x677n' ,'hf7stpc1n8' ,'hfutj0ugfa' ,'hhbkd3hqcl' ,'hhtiwh9my8' ,'hi868lk3mg' ,'ho0ia53ryo' ,'hsbavgsvdq' ,'hu1ajrlz56' ,'hv4vlu8j05' ,'hwjaow8olh' ,'i0yjtb9jx5' ,'i4tywbejaw' ,'i7f3spm7wb' ,'i8hq06n5lq' ,'i8khabab9d' ,'ib8fw0ujup' ,'ichutgyea5' ,'icrttinacb' ,'idxinrlr6s' ,'ifjp06n42a' ,'iful62rsw5' ,'ils1h9hp1v' ,'ilsuyfskr4' ,'ipt3405kx5' ,'ipvfpi5ras' ,'irj6jtheyj' ,'irnycrokxi' ,'is81nc09i9' ,'istjsqxsvv' ,'iwll46ouhu' ,'izk0j0etd2' ,'j04t45tzl7' ,'j0btt7l208' ,'j2sbqyoplq' ,'j4eystzof7' ,'j8clf8vnb7' ,'j9223e6no3' ,'jbwd2rimgs' ,'jbxdo0x6qp' ,'jdwr30mwrp' ,'jdyo130yi4' ,'jg4stlpqrp' ,'jhyffvvd4z' ,'jijxj8l6es' ,'jk5vebhjie' ,'jnkgbor86g' ,'jsagreormy' ,'jtnwgs9krc' ,'jtz87pzgl8' ,'juflgyjjmy' ,'jvftj5xdnf' ,'jvlppts3iq' ,'jvn35ndv18' ,'jwzgvagrpq' ,'jxnooi3v86' ,'k1501n4dnn' ,'k2nmbo3dki' ,'k3xkhmi9ua' ,'k933us44v6' ,'k9s3p56nmx' ,'ka7hl60nl3' ,'kai74ktydt' ,'kc4w13gmsi' ,'kd06ep7wo4' ,'kfqy9asy7r' ,'kg8l7blytn' ,'kgjehexbwv' ,'klp73e68bw' ,'kps2e5euus' ,'kpwxop9z37' ,'krv8kkxd5t' ,'kv68ybuted' ,'kwf78on9l4' ,'kyfk3oucuu' ,'kz20vvuyzg' ,'kz4ebdq1x2' ,'kzf82k7myt' ,'l0u5r4400k' ,'l5glxiopgb' ,'l78dkvcfz4' ,'l957o8khvh' ,'lctjay6pbr' ,'lghnxq8fr6' ,'lhqo1ghkru' ,'lilns6z1q6' ,'ljn7206gra' ,'llouk0pjnm' ,'ln9jgsw9dq' ,'lomx12fw2h' ,'lqwnmzm1oj' ,'lv1wve8xai' ,'lvbc2hwixm' ,'lvfpt5uc3g' ,'lvz5ldbfqk' ,'lwn15yxwca' ,'lx6t5es0iy' ,'lxec41m4sn' ,'lzepjktb44' ,'m2q9nol0kz' ,'m2qqvk1g8s' ,'m6h69xhzri' ,'m7lbrfb817' ,'m8f1gbawa0' ,'m8q4u5nlfn' ,'mcht2s7lcm' ,'mkfj6hxxaz' ,'ml9qlexdlx' ,'mmgzsc784d' ,'mqtz8wndko' ,'mrtq7v2j2j' ,'ms2vl6agah' ,'mt0u8jujyi' ,'mt3ppt5p4g' ,'mwp5ue49r0' ,'mwrrpkcoxs' ,'mwzrzgfd7r' ,'n01ty2z88w' ,'n0vrynmw3z' ,'n25zyh0wuc' ,'n6eeacpogh' ,'n917sbp598' ,'n9a0guu5ty' ,'nd768f884x' ,'ne50ri5lk3' ,'nius3x5wby' ,'nj6i2j621o' ,'njovuj93an' ,'nmamy9pa80' ,'nn368k24l0' ,'nobayjvzbq' ,'nrbbxo7shm' ,'nscbnvxj9p' ,'ntfm6t2x48' ,'nv5ml52n6k' ,'nvsz5seep3' ,'nwddbztq1x' ,'nxzraz2lu3' ,'o0ocqfgamz' ,'o3v2svrus3' ,'o4cr2azjzk' ,'o59qbhw5ax' ,'o8ysmfmi2t' ,'oajpnyev59' ,'ocfw230hvq' ,'ogntq5o804' ,'ogozg3vxll' ,'olaj1usgy8' ,'on8jovb92x' ,'onpho4gwgk' ,'oosx50n5uc' ,'opr1rckqrd' ,'os440l5tlc' ,'os81kb1u46' ,'ow0qd1ygkx' ,'oxnortc1uy' ,'oyu43llm88' ,'p4au7tzadz' ,'p4rzsx7ez3' ,'p7ccx4n1rw' ,'paukhaytzb' ,'pc9tycokvp' ,'pdokj7nxs8' ,'pfuyb4vm2o' ,'ph6mej7wdl' ,'pjqktp7hkx' ,'pkxaujiwfu' ,'pob74n93ee' ,'priu6jjplp' ,'prt9tb8mcc' ,'pv7eftfj6i' ,'pvuaquz7gj' ,'pz0fyi8rff' ,'pzpm125dj2' ,'q228l35v47' ,'q42j2tp6q6' ,'q6i9hnmqyr' ,'qgs91lxt4z' ,'qhc355fknk' ,'qi2bh2318x' ,'qk2veflr61' ,'qkc6abbin5' ,'qknld4zwmm' ,'qm2mukf1eo' ,'qmk9rlo8d5' ,'qpox9gsnwi' ,'qv9dxudw6h' ,'qwcbbxj6en' ,'qynp1k8iz0' ,'r0foqhs7dq' ,'r0v9k88xgo' ,'r1i4ncefes' ,'r1lr92uc1w' ,'r1zgxknkw3' ,'r2jcc3c1al' ,'r9wxwat170' ,'rbpgzp365f' ,'rc3vwpisjb' ,'rcgszrqmit' ,'rcu6ixn8pl' ,'rdlbuzru2x' ,'rhx7skhe14' ,'ri71zmx18v' ,'rkkb47wwd8' ,'rpf5tq0lni' ,'rqd0jp64h1' ,'rrfh7vvhr8' ,'rsqpvcq50f' ,'rsr7mtyr3r' ,'rvdc71w2qe' ,'rvjj1yusb7' ,'rwsriw0lfy' ,'rx1k65l015' ,'s0eflgl8yj' ,'s0htqvosx1' ,'s0wa9e6l9f' ,'s2lgam5a9s' ,'s3hd8ht7ma' ,'s4socfnuft' ,'s5kvewm64d' ,'s7aqqurp9w' ,'sgk7552y1o' ,'shtvxxtwza' ,'si5kmk7u82' ,'sjwrwcve1t' ,'sk91qj7j2a' ,'spd753h6b6' ,'sttxxj59lx' ,'sw24j7eg3n' ,'sw3vdwift6' ,'swkknd9r3b' ,'sypia0b9z8' ,'t174na79gr' ,'t2xen0wvuw' ,'t39m7fjmr9' ,'t45967etfq' ,'t4cy23ma4k' ,'t6ewz7p97q' ,'tfw7xszz9j' ,'tjhjuw0f83' ,'tjnn85rvm9' ,'tmaowv3zo2' ,'to3a0v99wa' ,'tobb9kr00s' ,'tpam24jm3e' ,'tpbssqgib7' ,'tr2ss5kf60' ,'tu5i90so6y' ,'txkwspqyf3' ,'ty941nxtgp' ,'u0ujvl78qk' ,'u2kqokmuc3' ,'u3t05zmo96' ,'ubruo1zfql' ,'uduuei3acz' ,'ufor6pllrf' ,'ug3ni3jhe4' ,'uhfdfzi470' ,'ujlvjcqp7q' ,'ukomxbt8bs' ,'ulq2h8so9n' ,'uqbgxo7p7g' ,'urke0jeuy9' ,'uz6xwg7c8v' ,'v03sxpl8dw' ,'v8xnfrfcdl' ,'vbaqm1kfwb' ,'vbojlcnoy5' ,'vc9w94ohm0' ,'vddbfbq76x' ,'veo11k0wqx' ,'vjar4k8q4g' ,'vkeaxolkdh' ,'voaacaf3vs' ,'vpqkbb1mg4' ,'vu2vq10kht' ,'vug29mbkgl' ,'vuk1p7ea5b' ,'vvhcvm95qn' ,'vvvz0vnz5o' ,'w1nus4vwq6' ,'w1p3o5fjxy' ,'w2cy6luu88' ,'w4lqa4vrzl' ,'w689ff1cv5' ,'w6guem7a9n' ,'w6wppki2wr' ,'w8notdmhmb' ,'w8qdvpzx3m' ,'wbsh10h0k2' ,'wc0tnnwvt3' ,'wd5jdsswgz' ,'wehv87z6y5' ,'wj5w8dzvan' ,'wmmo1whtwi' ,'woepv1ngbe' ,'wq8b4xq8l1' ,'wr9oafca85' ,'x0265c3joh' ,'x4j37bqk2n' ,'x634jvs3fw' ,'x87ucepzb1' ,'x8hao34uuc' ,'x8uvnx6tfo' ,'xbrwlxq4dn' ,'xfn9dngqn9' ,'xi2xf0dyri' ,'xiqh8yzfi6' ,'xm1fia33ny' ,'xm9s3hm5cz' ,'xmqpc4f8fq' ,'xmywd1v2yi' ,'xo6knhxrce' ,'xro68v07fw' ,'xte9kbl202' ,'xvnb8xcelc' ,'y2f69n6lbm' ,'y5xqrtnrrw' ,'y6hkv02e9k' ,'y6lwer2a4t' ,'y7crzip3sn' ,'y8ue4ewr3t' ,'yaop5om2wa' ,'yg7m5mmcnd' ,'yga8fk9bxv' ,'yhv69utbcj' ,'yl5v4fooms' ,'yn78ax4wge' ,'yo1n7m3m3x' ,'yo3kc86m0z' ,'ypie316yts' ,'ypm05fvk3y' ,'yr380s5onl' ,'yu5ydqvdzp' ,'yuj2meafd9' ,'yw2zey5zp9' ,'yxmeg2cwca' ,'yycbn1djj9' ,'yz4h7wg48c' ,'z0judalbof' ,'z1nn85ypyp' ,'z1othpbess' ,'z4qhbpu336' ,'z7jqgy2jsh' ,'z8so2yncqn' ,'z98ucm2b59' ,'zkmhi6mpgh' ,'zks4xbeif5' ,'zkvqec6xmo' ,'zlhko11xsy' ,'zrx1x8no8o' ,'zsxjvg8gec' ,'zu51hn5qhe' ,'zu9r3ku5zn' ,'6azb8qwrmr' ,'fxy456hv8g' ,'0sy0d6w0jj' ,'4l7iwto1yc' ,'4nvz7ts28v' ,'6pl0mpnkhb' ,'8makdbs65m' ,'cmxpp6qhip' ,'l00r699k3k' ,'mshpu4lt57' ,'t8h02owerm' ,'wbdn06zkmb' ,'yromzdlm9d' ,'z4m0ifqlso' ]



function downloadVideo(hello){
  if( hello < hola.length ) {


console.log(hello)
var options = {
  host: 'api.wistia.com',
  path: '/v1/medias/'+hola[hello]+'.json?api_password=a37159574b0efc8111576d148632ebe10429bede987ee16179b83c28cd06a46a'
};

var req = https.get(options, function(res) {
 // console.log('STATUS: ' + res.statusCode);
//  console.log('HEADERS: ' + JSON.stringify(res.headers));

  // Buffer the body entirely for processing as a whole.
  var bodyChunks = [];
  res.on('data', function(chunk) {
    // You can process streamed parts here...
    bodyChunks.push(chunk);
  }).on('end', function() {
    var body = Buffer.concat(bodyChunks);

    var bodyjson = JSON.parse(body.toString('utf8'));

    var finder = lodash.filter(bodyjson.assets, { 'type': 'HdMp4VideoFile' } );
    console.log(hola[hello])

    

    if (finder != '') {
console.log(finder[0].url);
    var file = fs.createWriteStream("videos/"+bodyjson.hashed_id+".mp4");


    var request = http.get(finder[0].url, function(response) {
      response.pipe(file);
      file.on('finish', function() {
        console.log("se acabo")
           fs.appendFileSync('succcess.txt', hola[hello]);
        file.close();  // close() is async, call cb after close completes.
        downloadVideo(hello+1)

      }).on('error', function(e) {
          fs.appendFileSync('error.txt', hola[hello] + '  '+ e);

            });
    });

    
    } // end if
    // ...and/or process the entire body here.
  })
});

req.on('error', function(e) {
  console.log('ERROR: ' + e.message);
  fs.appendFileSync('error.txt', hola[hello] + '  '+ e);
  downloadVideo(hello)

});

  }
}

downloadVideo(0);
