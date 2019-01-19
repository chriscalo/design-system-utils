# How to organize this repo

## Levels of abstraction

From lowest level to highest:

### Values

``` scss
$red-50      //=> #e42737
$border-m    //=> 4px
$text-size-m //=> 1rem
```


### Functions that generate values

``` scss
grey(30)      //=> #ababab
grid-unit(12) //=> 96px
elevation(4)  //=> 0 4px 8px hsla(0deg, 0%, 0%, 0.2)
```

### Declaration blocks

``` scss
display: flex;
z-index: 10;
color: white;
```
