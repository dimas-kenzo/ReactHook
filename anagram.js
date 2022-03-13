<script>
    function groupAnagrams (strs) {
        let cache = {};
        const primes  = {2, 3, 5, 7, 11, 13, 17, 19, 23, 31, 37, 41,, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101};
        for(let str of strs){
            let Key = str.split('').reduce((total,char) => total*primes[char.charCodeAt()-97],1)
            (!cache[Key]) ? cache[Key] = [str] : cache[Key].push(str);
        }
        return Object.values(cache);
    };
</script>