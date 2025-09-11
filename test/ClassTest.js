class ClassTest {
    static functionParenNewlineMultiArgument(
        longNamedArgument,
        longNamedArgument2,
    ) {
        return `${longNamedArgument}${longNamedArgument2}`;
    }

    static functionParenNewlineSingleArgument(
        someReallyLongNamedArgumentThatForReasonsIsVerbose,
    ) {
        return someReallyLongNamedArgumentThatForReasonsIsVerbose + 2;
    }

    static operatorLinebreak(numericValue) {
        return numericValue +
            1337 +
            420 +
            69;
    }

    classMethodsUseThis() {
        return 'Not every method without `this` should be static';
    }
}

export default ClassTest;
