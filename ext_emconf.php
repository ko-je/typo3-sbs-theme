<?php

$EM_CONF[$_EXTKEY] = [
    'title' => 'SBS Theme',
    'description' => 'Design für Störtebeker Brauspezialitäten',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'bootstrap_package' => '15.0.0-15.99.99',
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'Sbs\\SbsTheme\\' => 'Classes',
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Jens Koch',
    'author_email' => 'j.koch@stoertebeker.com',
    'author_company' => 'sbs',
    'version' => '1.0.0',
];
