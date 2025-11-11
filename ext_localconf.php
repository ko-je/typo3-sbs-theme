<?php

defined('TYPO3') or die('Access denied.');

// Add default RTE configuration
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['sbs_theme'] = 'EXT:sbs_theme/Configuration/RTE/Default.yaml';

$GLOBALS['TYPO3_CONF_VARS']['SYS']['locallangXMLOverride']['EXT:bootstrap_package/Resources/Private/Language/locallang.xlf'][] =
  'EXT:sbs_theme/Resources/Private/Language/Overrides/bootstrap_package/locallang.xlf';
$GLOBALS['TYPO3_CONF_VARS']['SYS']['locallangXMLOverride']['de']['EXT:bootstrap_package/Resources/Private/Language/locallang.xlf'][] =
  'EXT:sbs_theme/Resources/Private/Language/Overrides/bootstrap_package/de.locallang.xlf';
