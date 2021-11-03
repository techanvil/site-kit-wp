function dumpFrameTree(frame, indent) {
  console.log(indent + frame.url());
  for (const child of frame.childFrames()) {
    dumpFrameTree(child, indent + '  ');
  }
}

async function dumpOpacity(page, msg) {
  const { opacity, isHover } = await page.evaluate(() => {
    const opacity = window.getComputedStyle( document.querySelector('.googlesitekit-button--hover'), ':before' ).opacity
    const isHover = !! document.querySelector('.googlesitekit-button--hover:hover');
    return { opacity, isHover };
  });
  console.log('OPACITY, ISHOVER', msg, opacity, isHover);
}

module.exports = async ( page, scenario ) => {
	const hoverSelector = scenario.hoverSelectors || scenario.hoverSelector;
	const clickSelector = scenario.clickSelectors || scenario.clickSelector;
	const keyPressSelector =
		scenario.keyPressSelectors || scenario.keyPressSelector;
	const scrollToSelector = scenario.scrollToSelector;
	const postInteractionWait = scenario.postInteractionWait; // selector [str] | ms [int]
	console.log(
		'hoverSelector, clickSelector, keyPressSelector, scrollToSelector, postInteractionWait', 
		hoverSelector, clickSelector, keyPressSelector, scrollToSelector, postInteractionWait
	);

	if ( keyPressSelector ) {
		for ( const keyPressSelectorItem of [].concat( keyPressSelector ) ) {
			await page.waitForSelector( keyPressSelectorItem.selector );
			await page.type(
				keyPressSelectorItem.selector,
				keyPressSelectorItem.keyPress
			);
		}
	}

	if ( hoverSelector ) {
                // console.log('FRAME TREE 1');
                // dumpFrameTree(page.mainFrame(), '');
                dumpOpacity(page, '1');
		for ( const hoverSelectorIndex of [].concat( hoverSelector ) ) {
			try {
				await page.waitForSelector( hoverSelectorIndex, { visible: true } );
			} catch (e) {
				console.log('CATCH ERROR [waitForSelector]', e);
			}
			// await page.waitForTimeout( 100 );

                        // console.log('FRAME TREE 2');
                        // dumpFrameTree(page.mainFrame(), '');

			try {
				await page.hover( hoverSelectorIndex );
                                // await page.waitForSelector('.googlesitekit-button--hover.mdc-button--raised:hover');
			} catch (e) {
				console.log('CATCH ERROR [hover]', e);
			}
                        dumpOpacity(page, '2');

                        // console.log('FRAME TREE 3');
                        // dumpFrameTree(page.mainFrame(), '');
		}
	}

	if ( clickSelector ) {
		for ( const clickSelectorIndex of [].concat( clickSelector ) ) {
			await page.waitForSelector( clickSelectorIndex );
			await page.click( clickSelectorIndex );
		}
	}

	if ( postInteractionWait ) {
		try {
			await page.waitForTimeout( postInteractionWait );
		} catch (e) {
			console.log('CATCH ERROR [waitForTimeout]', e);
		}
                dumpOpacity(page, '3');

                // console.log('FRAME TREE 4');
                // dumpFrameTree(page.mainFrame(), '');
	}

	if ( scrollToSelector ) {
		await page.waitForSelector( scrollToSelector );
		await page.evaluate( ( scrollToSelectorLocal ) => {
			document.querySelector( scrollToSelectorLocal ).scrollIntoView();
		}, scrollToSelector );
	}
};
