stopwords = ['a', 'about', 'above', 'across', 'after', 'afterwards', 'again', 'against', 'all', 'almost', 'alone', 'along', 'already', 'also', 'although', 'always', 'am', 'among', 'amongst', 'amoungst', 'amount', 'an', 'and', 'another', 'any', 'anyhow', 'anyone', 'anything', 'anyway', 'anywhere', 'are', 'around', 'as', 'at', 'back', 'be', 'became', 'because', 'become', 'becomes', 'becoming', 'been', 'before', 'beforehand', 'behind', 'being', 'below', 'beside', 'besides', 'between', 'beyond', 'bill', 'both', 'bottom', 'but', 'by', 'call', 'can', 'cannot', 'cant', 'co', 'computer', 'con', 'could', 'couldnt', 'cry', 'de', 'describe', 'detail', 'do', 'done', 'down', 'due', 'during', 'each', 'eg', 'eight', 'either', 'eleven', 'else', 'elsewhere', 'empty', 'enough', 'etc', 'even', 'ever', 'every', 'everyone', 'everything', 'everywhere', 'except', 'few', 'fifteen', 'fify', 'fill', 'find', 'fire', 'first', 'five', 'for', 'former', 'formerly', 'forty', 'found', 'four', 'from', 'front', 'full', 'further', 'get', 'give', 'go', 'had', 'has', 'hasnt', 'have', 'he', 'hence', 'her', 'here', 'hereafter', 'hereby', 'herein', 'hereupon', 'hers', 'herse', 'herse"', 'herself', 'him', 'himse', 'himse"', 'himself', 'his', 'how', 'however', 'hundred', 'i', 'ie', 'if', 'in', 'inc', 'indeed', 'interest', 'into', 'is', 'it', 'its', 'itse', 'itse"', 'keep', 'last', 'latter', 'latterly', 'least', 'less', 'ltd', 'made', 'many', 'may', 'me', 'meanwhile', 'might', 'mill', 'mine', 'more', 'moreover', 'most', 'mostly', 'move', 'much', 'must', 'my', 'myse', 'myself', 'myse"', 'name', 'namely', 'neither', 'never', 'nevertheless', 'next', 'nine', 'no', 'nobody', 'none', 'noone', 'nor', 'not', 'nothing', 'now', 'nowhere', 'of', 'off', 'often', 'on', 'once', 'one', 'only', 'onto', 'or', 'other', 'others', 'otherwise', 'our', 'ours', 'ourselves', 'out', 'over', 'own', 'part', 'per', 'perhaps', 'please', 'put', 'rather', 're', 'same', 'see', 'seem', 'seemed', 'seeming', 'seems', 'serious', 'several', 'she', 'should', 'show', 'side', 'since', 'sincere', 'six', 'sixty', 'so', 'some', 'somehow', 'someone', 'something', 'sometime', 'sometimes', 'somewhere', 'still', 'such', 'system', 'take', 'ten', 'than', 'that', 'the', 'their', 'them', 'themselves', 'then', 'thence', 'there', 'thereafter', 'thereby', 'therefore', 'therein', 'thereupon', 'these', 'they', 'thick', 'thin', 'third', 'this', 'those', 'though', 'three', 'through', 'throughout', 'thru', 'thus', 'to', 'together', 'too', 'top', 'toward', 'towards', 'twelve', 'twenty', 'two', 'un', 'under', 'until', 'up', 'upon', 'us', 'very', 'via', 'was', 'we', 'well', 'were', 'what', 'whatever', 'when', 'whence', 'whenever', 'where', 'whereafter', 'whereas', 'whereby', 'wherein', 'whereupon', 'wherever', 'whether', 'which', 'while', 'whither', 'who', 'whoever', 'whole', 'whom', 'whose', 'why', 'will', 'with', 'within', 'without', 'would', 'yet', 'you', 'your', 'yours', 'yourself', 'yourselves', 'whom', 'm', 'couldn\'t', 'until', 'during','under', 'wasn', 'both', 'out', 'didn', 'before', 'aren\'t', 'weren', 'why', 'each', 'mightn', 'doesn', 'below', 'should', 'hers', 'herself', 'who', 'too', 'most', 'and', 'so', 'about', 'should\'ve', 'me', 'you\'ll', 'no', 'up', 'shouldn', 'can', 'off', 'than', 'just', 'once', 'ain', 'isn', 'won\'t', 'that\'ll', 'those', 'don', 'hadn\'t', 'isn\'t', 'which', 'shouldn\'t', 'to', 'themselves', 'yourself', 'was', 'on', 'other', 'o', 'had', 'her', 'ourselves', 'mightn\'t', 'he', 'does', 'any', 'your', 'these', 'doing', 'an', 'by', 'through', 'we', 'from', 'my', 'its', 'it', 'haven', 'ma', 'hasn\'t', 'being', 've', 'some', 'shan\'t', 'over', 'mustn\'t', 'himself', 'theirs', 'where', 'if', 'myself', 'do', 'don\'t', 'wouldn\'t', 'the', 'of', 'needn', 'were', 'aren', 'in', 'wasn\'t', 'few', 'now', 'mustn', 's', 'y', 'you\'re', 'their', 'been', 'our', 'i', 'because', 'not', 'be', 'then', 'against', 'd', 'haven\'t', 'his', 'again', 'how', 'all', 'as', 'weren\'t', 'more', 'wouldn', 'will', 'into', 'this', 'you', 'she\'s', 'are', 'yourselves', 'didn\'t', 'above', 'own', 'needn\'t', 'with', 'you\'d', 'have', 'am', 'further', 'there', 'very', 'nor', 'doesn\'t', 'what', 'did', 'that', 'while', 'them', 'such', 'hadn', 'she', 'between', 'having',  'couldn', 'has', 'won', 'him', 'here', 'it\'s', 'you\'ve', 'at', 'shan', 'is', 'only', 'they', 'll', 'ours', 'but', 'after', 'hasn', 'for', 'when', 'down', 'same', 'or', 'yours', 't', 're','itself']

function cleanText()
{
  var text = document.getElementById('textarea1').value;
  console.log(text)
  var options = document.getElementsByClassName('cb');
  if(options[8].checked)
    text = nlp(text).normalize().out('text')
  if (options[0].checked)
    text = text.replace(/((http[s]?:\/\/)[^ <>'"{}|\\^`[\]]*)/g, ' ');
  if (options[1].checked)
    text = text.replace(/@\S+/g, ' ');
  text = text.replace(/\S+…/g, ' ');
  if (options[2].checked)
    text = text.replace(/#\S+/g, ' ');
  text = text.toLowerCase()
  if (options[3].checked)
  {
    text = text.replace('can\'t', 'can not ')
    text = text.replace('cannot', 'can not ')
    text = text.replace('what\'s', 'what is ')
    text = text.replace('it\'s', 'it is ')
    text = text.replace('\'s', ' ')
    text = text.replace('\'ve', ' have ')
    text = text.replace('n\'t', ' not ')
    text = text.replace('i\'m', 'i am ')
    text = text.replace('\'re', ' are ')
    text = text.replace('\'d', ' would ')
    text = text.replace('\'ll', ' will ')
  }
  if (options[4].checked)
    text = text.replace(/\W/g, ' ');
  if (options[5].checked)
    text = text.replace(/\d/g, ' ');
  text = text.replace(/\s+/g, ' ');
  if(options[6].checked)
  {
    words = text.split(' ');
    text = '';
    for(i=0;i<words.length;i++)
      if (words[i].length > 2)
        text += words[i]+' '
    text = text.slice(0, text.length)
  }
  if(options[7].checked)
  {
    words = text.split(' ');
    text = '';
    for(i=0;i<words.length;i++)
      if (stopwords.indexOf(words[i]) < 0)
        text += words[i]+' '
    text = text.slice(0, text.length)
  }
  document.getElementById('cleaned').innerHTML = text;
}
