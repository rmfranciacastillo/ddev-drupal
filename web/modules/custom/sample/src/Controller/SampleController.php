<?php

declare(strict_types=1);

namespace Drupal\sample\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Returns responses for Sample routes.
 */
final class SampleController extends ControllerBase {

  /**
   * Builds the response.
   */
  public function __invoke(): array {

    $build['content'] = [
      '#type' => 'item',
      '#markup' => $this->t('It works!'),
    ];

    return $build;
  }

}
